const nodemailer = require('../config/nodemailer');

exports.newComment  = (comment) =>{
    console.log('inside the Comment mailer',comment);
    nodemailer.transporter.sendMail({
        from:'trialgamail@gmail.com',
        to:comment.user.email,
        subject:'New Comment Published !',
        html:'<h1>Yup Your Comment Now Is Published </h1>'
    },(err,info)=>{
        if(err){
            console.log('Error In Sending Mail ::', err);
            return;
        }
        console.log('Message Sent',info);
        return;
    });
}