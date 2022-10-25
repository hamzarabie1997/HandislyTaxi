const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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
  res.send("Hello");
});

app.post("/backend", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (info) => {
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "hamza.rabie1997@gmail.com",
      pass: "jzbtsmotbgxsuuid",
    },
  });

  let mailOptions = {
    from: "TaxiApp",
    to: "hamza.rabie1997@gmail.com",
    subject: "New Subscribtion",
    html: `<p><b>Name:</b> ${user.sub_email}</p>`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  let save = function () {
    var input = {
      email: user.sub_email,
    };

    var params = {
      TableName: "Subscribe",
      Key: {
        email: { S: input.email },
      },
    };

    var params2 = {
      TableName: "Subscribe",
      Item: {
        email: { S: input.email },
      },
    };

    dynamodb.getItem(params, function (err, data) {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data);
        if (Object.keys(data).length === 0) {
          dynamodb.putItem(params2, function (err, data) {
            if (err) {
              console.log("Error happened: " + JSON.stringify(err, null, 2));
            } else {
              console.log("Added Successfully");
            }
          });
        }
      }
    });
  };

  save();
  callback(info);
}
