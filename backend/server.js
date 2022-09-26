const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

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
    from: "TaxiApp", // sender address
    to: "hamza.rabie1997@gmail.com", // list of receivers
    subject: "New Issue", // Subject line
    html: `<p><b>Name:</b> ${user.u_name}</p>
    <p><b>Email:</b> ${user.u_email}</p>
    <p><b>Phone:</b> ${user.u_phone}</p>
    <p><b>Address:</b> ${user.u_address}</p>
    <p><b>Subject:</b> ${user.u_subject}</p>
    <p><b>Message:</b> ${user.u_message}</p>`,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
