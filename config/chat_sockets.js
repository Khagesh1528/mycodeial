
module.exports.chatSockets = function (socketServer) {
    let io = require('socket.io')(socketServer);

    io.sockets.on('connection', function (socket) {
        
        console.log('new connection received', socket.id);
        // socket is a object
        // io is a global variable

        socket.on('disconnect', function () {
            console.log('socket disconnected!');
        });


        //* recieve the event from client side

        socket.on('join_room', function (data) {
            console.log('joining request rec.', data);

            // request to join chat room 
            socket.join(data.chatroom);

             // this is notify the other user in chat room to joined another user
            io.in(data.chatroom).emit('user_joined', data);
        });

        // *CHANGE :: detect send_message and broadcast to everyone in the room
        socket.on('send_message', function (data) {
            io.in(data.chatroom).emit('receive_message', data);
        });


    });

}