const nodemailer = require('../config/nodemailer');

exports.forgotPassword = (email,token) => {
   
    // Here sent sytax and store html templates
    // let htmlString = nodemailer.renderTemplate({ comment: comment }, '/comments/new_comment.ejs') // this is path of ejs file
    nodemailer.transporter.sendMail({
        from: 'trialgamail@gmail.com',
        to: email,
        subject: 'Reset Your Password !',
        text: `To reset your password, click on the following link: http://localhost:8000/users/reset/${token}`,
    }, (err, info) => {
        if (err) {
            console.log('Error In Sending Mail To Forgot Password::', err);
            return;
        }
        console.log('Message Sent Successfully !!',info); // this is email sent info hain
        return;
    });
}