


class SocketEvents {

    constructor(io) {


        this.socket

        this.loginUsers = new Map();
        io.on('connection', this.connection.bind(this));

       
    }

    connection(socket) {

        console.log(socket.id)
        this.socket = socket
       

        socket.on('login', this.login.bind(this));

        socket.on('disconnect', this.disconnect.bind(this));
        
    }

    disconnect(conn) {

        console.log('user left play', this.socket.id, conn);
        
    }

    login(user) {

        console.log('user info', user)
        //user.connectionID = this.socket.id

        this.loginUsers.set(this.socket.id, user);
        console.log(this.loginUsers.size)
        this.socket.userInfo = user
    }
}

module.exports = SocketEvents

