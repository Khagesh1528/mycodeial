const queue = require('../config/kue');
const commentsMailer = require('../mailer/comment_mailer');

queue.process('emails',function(job,done){
    console.log('Emails Worker in proccessing a job',job.data);
    commentsMailer.newComment(job.data);
    done();
});