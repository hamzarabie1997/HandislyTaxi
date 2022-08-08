const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const port = 3000;
const client = new AWS.DynamoDB.DocumentClient();


app.listen(port, () => {
    console.log("listening on port " + port);

});