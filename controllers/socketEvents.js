const utils = require('./../common/utility');

class SocketEvents {

    constructor(io) {


        //this.sockets = new Map();
        //this.loginUsers = new Map();
        //this.loginUsersInfo = new Map();
        this.io = io;
        
        io.on('connection', this.connection.bind(this));

       
    }

    connection(socket) {

        console.log(socket.id);
        console.log('connection', this.getUsers('user', null, 'Go-playing'));
        //this.socket = socket
       
        //this.sockets.set(socket.id, socket);
        
        socket.on('disconnect', (reason) => {

            if (reason === 'transport close') {

                //this.sockets.delete(socket.id);
                //this.loginUsers.delete(socket.user.username);
                //this.loginUsersInfo.delete(socket.user.username);
                console.log('disconnect', 'user left ' + socket.user.username);

                //socket.leave('LoginRoom', () => {


                //    this.io.to('LoginRoom').emit('leave', Array.from(this.loginUsersInfo.values()));

                //});
            }
        });//this.disconnect
        socket.on('disconnecting', this.disconnecting);
        socket.on('error', this.error);


        socket.on('login', this.login.bind(this));  
        socket.on('play', this.play.bind(this)); 
        socket.on('findOpponent', this.findOpponent.bind(this)); 
        socket.on('leaveGame', this.leaveGame.bind(this)); 
        
    }

    disconnect(reason) {

        console.log('disconnect', reason);
        console.log('disconnect', this.getUsers('user', null, 'Go-playing'));
    }
    error(error) {
        console.log('error', error);
    }
    disconnecting(reason) {
        console.log('disconnecting', reason);
    }

   
    login(socketID, user) {

        console.log(socketID);
        let socket = this.findSocket(null, null, socketID);
        console.log(socket.id);
        // console.log(user);

        socket.user = user;
        socket.username = user.username;
        console.log(socketID, user.FullName + "  " + socket.user.UserID, user.status);

    }

    play(socketID, position) {

      
        let socket = this.findSocket(null, null, socketID);
        
        let opponent = socket.opponent;
       
       
       
        this.io.to(opponent).emit('play', position);  
      
    }

    findOpponent(socketID, game) {

        let socket = this.findSocket(null, null, socketID);
        socket.reqTime = Date.now();
        
        let sockets = this.findSocket(null, game, null);
        socket.join(game);

        if (sockets.length > 0) {

            let socketOpponent = sockets.sort(function (a, b) {
                return a.reqTime - b.reqTime;
            })[0];

            socket.opponent = socketOpponent.id;
            socketOpponent.opponent = socket.id;

            socketOpponent.leave(game)
            socket.leave(game)

            socketOpponent.join(game + '-playing');
            socket.join(game + '-playing');

            console.log(socketOpponent.id, socket.id)
            socket.emit('findOpponent', 'true')
            socketOpponent.emit('findOpponent','false')
        }
        
        //user.status = 'req'
        
    }

    leaveGame(socketID, game) {

        let socket = this.findSocket(null, null, socketID);
        socket.leave(game + '-playing')
        let socketOpponent = this.findSocket(null, null, socket.opponent);
        socketOpponent.leave(game + '-playing')
        socket.opponent = null;
        socketOpponent.opponent = null;
    }

    findSocket(namespace, roomId, socketId) {

        var res = [],
            ns = this.io.of(namespace || "/");

        if (socketId)
            return ns.connected[socketId];

        if (ns) {
            for (var id in ns.connected) {
                if (roomId) {
                    console.log(ns.connected[id].rooms)
                    var index =  ns.connected[id].rooms[roomId];
                    if (index) {
                        res.push(ns.connected[id]);
                    }
                } else {
                    res.push(ns.connected[id]);
                }
            }
        }
        return res;
    }

    getUsers(field, value, roomId) {

        let sockets = roomId ? this.findSocket(null, roomId) : this.findSocket();

        let users = utils.array.pluck(sockets, 'user');

        if (field)
            return users;

        let newUsers = [];

        for (let i = 0; i < users.length; i++) {

            if (value) {
                if (users[i][field] === value)
                    newUsers.push(users[i]);
            }
            else
                newUsers.push(users[i]);
        }

        newUsers = newUsers.sort(function (a, b) {
            return a.time - b.time;
        });

        return newUsers;
    }

    getAllUsers() {

        let users = this.getUsers();

        return {
            count: users.length,
            users
        };
    }

    getLoginUsers() {

        let users = this.getUsers('status', 'login');

        return {
            count: users.length,
            users
        }
    }

    getGuestUsers() {

        let users = this.getUsers('status', 'guest');

        return {
            count: users.length,
            users
        };
    }

    deleteRoom(socket, nameId) {



        this.io.sockets.clients(name).forEach(function (s) {
            s.leave(name);
        });
    }

    leaveRoom(socket, roomId) {

        socket.leave(roomId);
    }

    getRoomsSocket(socket) {

        let rooms = [];
        Object.keys(socket.rooms).forEach(function (room, idx) {
            if (idx !== 0) {
                rooms.push(room);
            }
        });
        return rooms;
    }

    isExistsRoom(socket, roomId) {

        let rooms = this.getRoomsSocket(socket);
        if (rooms.indexOf(roomId) > -1)
            return true;
        return false;
    }

     //getUsers(field, value) {


    //    let users = utils.array.pluck(Array.from(this.sockets.values), 'userInfo');
    //    let newUsers = [];

    //    for (let i = 0; i < users.length; i++) {

    //        if (users[i][field] === value)
    //            newUsers.push(users[i]);
    //    }

    //    newUsers = newUsers.sort(function (a, b) {
    //        return a.time - b.time;
    //    }); 

    //    return newUsers;
    //}
}

module.exports = SocketEvents;

