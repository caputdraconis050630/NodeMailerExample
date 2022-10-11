import nodemailer from "nodemailer";
import AWS from "aws-sdk";

// AWS Configuration(Access Key, Secret Key, etc)
AWS.config.loadFromPath(__dirname + "/aws_config.json");

const transporter = nodemailer.createTransport({
  SES: new AWS.SES({
    apiVersion: "2010-12-01",
  }),
});

transporter.sendMail(
  {
    from: "noreply@caput.dev",
    to: "caputdraconis@kakao.com",
    subject: "Test Email",
    html: "<h1> Welcome to register our website! </h1><br><a href='{Email Address Verify API}'>Verify My Email Address</a>",
  },
  (err, info) => {
    if (err) {
      err;
    }
    console.log("Send Mail Success: " + JSON.stringify(info.envelope));
    console.log(info.messageId);
  }
);
