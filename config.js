//var util = require('./Common/Utility');
const mongoose = require('mongoose');
const SocketEvents = require('./controllers/SocketEvents')

var config = {
    debug: true,
    host: 'localhost',
    port: 3008,

   
    dbInit() {

        mongoose.connect('mongodb+srv://masood:masgha@cluster0-l87vi.azure.mongodb.net/', {
            dbName: 'OnlineGame',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((a, b) => console.log('run db'))
            .catch(err => console.error(err));

        mongoose.Promise = global.Promise;
    },

    socketInit() {

        let io = new SocketEvents(global.WebSocket)

    },

    async appStart() {

     
       
       
        this.dbInit()
        this.socketInit()

        console.log('app runing on port ' + config.port.toString());

    },

   
};

module.exports = config;