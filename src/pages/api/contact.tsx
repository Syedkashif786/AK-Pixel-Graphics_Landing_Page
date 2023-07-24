export default function (req: any, res: any) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "infoakpixelgraphics@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "infoakpixelgraphics@gmail.com",
    to: "infoakpixelgraphics@gmail.com",
    subject: `Message From ${req.body.name}`,
    text:
      " | Sent from: " + req.body.email + req.body.messages + req.body.phone,
    html: `<div>Name : ${req.body.name}</div>
    <div>Email : ${req.body.email}</div>
    <div>Phone No : ${req.body.phone}</div>
    <div>Message : ${req.body.message}</div>
    <p>Sent from: ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
