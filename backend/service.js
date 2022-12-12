const attr = require("dynamodb-data-types").AttributeValue;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

var AWS = require("aws-sdk");
let awsConfig = {
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "AKIAVLKH2DQYSEJIBHXU",
  secretAccessKey: "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",
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
    const services = await getServices();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});


const getServices = async () => {
  const params = {
    TableName: "Services",
  };
  const services = await dynamodb.scan(params).promise();
  return services.Items;
};

const getBanners = async () => {
  const params = {
    TableName: "Banners",
  };
  const banners = await dynamodb.scan(params).promise();
  return banners.Items;
};
