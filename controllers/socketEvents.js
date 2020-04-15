const utils = require('./../common/utility')

class SocketEvents {

    constructor(io) {


        this.sockets = new Map();
        this.loginUsers = new Map();
        this.loginUsersInfo = new Map();
        this.io = io;
        
        io.on('connection', this.connection.bind(this));

       
    }

    connection(socket) {

        console.log(socket.id);
        //this.socket = socket
       
        this.sockets.set(socket.id, socket);
        
        socket.on('disconnect', (reason) => {

            if (reason === 'transport close' && this.sockets && socket.userInfo) {
                this.sockets.delete(socket.id);
                this.loginUsers.delete(socket.userInfo.username);
                this.loginUsersInfo.delete(socket.userInfo.username);
                console.log('disconnect', 'user left ' + socket.userInfo.username);

                socket.leave('LoginRoom', () => {


                    this.io.to('LoginRoom').emit('leave', Array.from(this.loginUsersInfo.values()));

                });
            }
        });//this.disconnect
        socket.on('disconnecting', this.disconnecting);
        socket.on('error', this.error);


        socket.on('login', this.login.bind(this));  
        socket.on('play', this.play.bind(this)); 
    }

    disconnect(reason) {

        console.log('disconnect', reason);
        
    }
    error(error) {
        console.log('error', error);
    }
    disconnecting(reason) {
        console.log('disconnecting', reason);
    }

    login(socketID, user) {

        let socket = this.sockets.get(socketID);
        //console.log('user info', socket)
        //user.connectionID = this.socket.id

        user.status = 'free';
        user.time = Date.now()

        this.loginUsers.set(user.username, socket.id); 
        this.loginUsersInfo.set(user.username, user); 
        
        console.log(this.loginUsers.size);
       
        socket.userInfo = user;
        
        socket.join('LoginRoom', () => {


            this.io.to('LoginRoom').emit('join', Array.from(this.loginUsersInfo.values()));
            
        });
    }

    play(socketID, position, states) {

      
        let socket = this.sockets.get(socketID);
        
        let opponent = socket.userInfo.opponent;
       
        let opponentSocketID = this.loginUsers.get(opponent);
       
        this.io.to(opponentSocketID).emit('play', position, states);  
      
    }

    findOpponent(socketID) {

        let socket = this.sockets.get(socketID);
        let user = socket.userInfo
        //user.status = 'req'
        
    }

    getUsers(field, value) {

       
        let users = utils.array.pluck(Array.from(this.sockets.values),'userInfo')
        let newUsers = []

        for (let i = 0; i < users.length; i++) {

            if (users[i][field] === value)
                newUsers.push(users[i])
        }

        newUsers = newUsers.sort(function (a, b) {
            return a.time - b.time;
        }); 

        return newUsers
    }
}

module.exports = SocketEvents;

