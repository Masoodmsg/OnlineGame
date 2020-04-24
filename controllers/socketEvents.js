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

        console.log(socketID);
        let socket = this.findSocket(null, null, socketID);
        console.log(socket.id);
        // console.log(user);

        socket.user = user;
        socket.userId = user.id;
        console.log(socketID, user.FullName + "  " + socket.user.UserID, user.status);

    }

    play(socketID, position) {

      
        let socket = this.findSocket(null, null, socketID);
        
        let opponent = socket.user.opponent;
       
        let opponentSocketID = this.loginUsers.get(opponent);
       
        this.io.to(opponentSocketID).emit('play', position);  
      
    }

    findOpponent(socketID, game) {

        let socket = this.findSocket(null, null, socketID);
        let user = socket.user;
        //user.status = 'req'
        
    }

   

    findSocket(roomId, namespace, socketId) {

        var res = [],
            ns = this.io.of(namespace || "/");

        if (socketId)
            return ns.connected[socketId];

        if (ns) {
            for (var id in ns.connected) {
                if (roomId) {
                    var index = ns.connected[id].rooms.indexOf(roomId);
                    if (index !== -1) {
                        res.push(ns.connected[id]);
                    }
                } else {
                    res.push(ns.connected[id]);
                }
            }
        }
        return res;
    }

    getUsers(field, value) {

        let sockets = this.findSocket();

        let users = utils.array.pluck(sockets, 'user');

        if (field)
            return users;

        let newUsers = [];

        for (let i = 0; i < users.length; i++) {

            if (users[i][field] === value)
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

