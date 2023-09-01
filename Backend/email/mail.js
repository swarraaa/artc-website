const nodemailer = require('nodemailer');
require('dotenv').config();

 const sendEmail = async (name, email, otp) => {
    try{
        let transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL,
                pass: process.env.PASS,
            },

        });
        await transporter.sendMail({
            from: process.env.EMAIL,
            to:email,
            subject: 'Registration Successful Confirmation',
            html: `<h1>Hi ${name}</h1><br><p>Your OTP is ${otp}</p>`,
        });
        console.log('email sent successfully!');
    }
    catch(err){
        console.log('email not sent');
        console.log(err);
    }
 }

module.exports=sendEmail;