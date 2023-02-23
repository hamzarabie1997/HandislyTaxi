const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

var AWS = require("aws-sdk");
let awsConfig = {
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: "",
};

var dynamodb = new AWS.DynamoDB(awsConfig);

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/backend", async (req, res) => {
  try {
    const combined = await getServices();
    res.json(combined);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

all = [];
const getServices = async () => {
  const params = {
    TableName: "Services",
  };
  const params2 = {
    TableName: "Banners",
  };
  const services = await dynamodb.scan(params).promise();
  const banners = await dynamodb.scan(params2).promise();
  all.push(banners.Items, services.Items);
  return all;
};