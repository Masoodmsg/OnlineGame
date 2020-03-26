


class SocketEvents {

    constructor(io) {


        this.sockets = new Map()

        this.loginUsers = new Map();
        io.on('connection', this.connection.bind(this));

       
    }

    connection(socket) {

        console.log(socket.id)
        //this.socket = socket
       
        this.sockets.set(socket.id, socket)
        socket.on('login', this.login.bind(this));
        socket.on('play', this.play.bind(this));
        socket.on('disconnect', this.disconnect.bind(this));
        
    }

    disconnect(conn) {

        console.log('user left play', conn);
        
    }

    login(socketID, user) {

        let socket = this.sockets.get(socketID)
        //console.log('user info', socket)
        //user.connectionID = this.socket.id
        
        this.loginUsers.set(user.username, socket.id); 
        console.log(this.loginUsers.size)
        socket.userInfo = user
    }

    play(socketID, position, states) {

      
        let socket = this.sockets.get(socketID)
        
        let opponent = socket.userInfo.opponent 
       
        let opponentSocketID = this.loginUsers.get(opponent)
       
        socket.to(opponentSocketID).emit('play', position, states);    
    }
}

module.exports = SocketEvents

