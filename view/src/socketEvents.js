import io from 'socket.io-client';


export default function SocketEvents(url) {

    this.url = url
    this.init = function () {

        let socket = io(this.url );


        socket.on('connect', function (socket) {

            console.log(socket)
        });
        socket.on('login', function (data) { });
        socket.on('disconnect', function () { });
       

        return socket
    }
}

