import nodemailer from 'nodemailer';

const sendOtp = async (email, otp) => {
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fbe140f53c5e77",
      pass: "9611bfb33669b9"
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendOtp;
