const nodemailer=require("nodemailer");
require("dotenv").config();

const transporter=nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
});

module.exports=transporter;