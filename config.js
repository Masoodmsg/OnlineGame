//var util = require('./Common/Utility');
const mongoose = require('mongoose');

var config = {
    debug: true,
    host: 'localhost',
    port: 3008,

   

    async appStart() {

     
        console.log('app runing on port ' + config.port.toString());

        mongoose.connect('mongodb+srv://masood:masgha@cluster0-l87vi.azure.mongodb.net/', {
            dbName: 'OnlineGame',
            useNewUrlParser: true, useUnifiedTopology: true
        }).then((a,b) => console.log('run db'))
            .catch(err => console.log(err));;
        mongoose.Promise = global.Promise;

      
    }
};

module.exports = config;