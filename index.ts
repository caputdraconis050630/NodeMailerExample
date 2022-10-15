import nodemailer from "nodemailer";
import AWS from "aws-sdk";

// AWS 설정 - 설정에 필요한 민감한 Accesskey, secretAccessKey, region을 .env 파일에 보관하였습니다.
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// nodemailer transport 생성
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
    html: "<h1> Welcome to our website! </h1><br><a href='{Email Address Verify API}'>Verify My Email Address</a>",
  },
  (err, info) => {
    if (err) {
      err;
    }
    console.log("Send Mail Success: " + JSON.stringify(info.envelope));
    console.log(info.messageId);
  }
);
