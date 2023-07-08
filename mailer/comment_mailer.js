const nodemailer = require('../config/nodemailer');

exports.newComment  = (comment) =>{
// Here sent sytax and store html templates
let htmlString = nodemailer.renderTemplate({comment:comment},'/comments/new_comment.ejs') // this is path of ejs file
    nodemailer.transporter.sendMail({
        from:'trialgamail@gmail.com',
        to:comment.user.email,
        subject:'New Comment Published !',
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('Error In Sending Mail ::', err);
            return;
        }
        // console.log('Message Sent',info); // this is email sent info hain
        return;
    });
}