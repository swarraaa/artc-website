const nodemailer = require('nodemailer');
const nodemailerSendgrid=require('nodemailer-sendgrid');
require('dotenv').config();

const sendEmail = aysnc ({email,subject,text}) => {
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
            html:text,
        });
        console.log('email sent successfully!');
    }
    catch(err){
        console.log('email not sent');
        console.log(err);
    }
};

module.exports=sendEmail;