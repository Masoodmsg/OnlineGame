//var util = require('./Common/Utility');
const mongoose = require('mongoose');

var config = {
    debug: true,
    host: 'localhost',
    port: 3008,

   

    async appStart() {

     
        console.log('app runing on port ' + config.port.toString());

        mongoose.connect('mongodb://localhost/OnlineGam', {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => console.log('start db'))
            .catch(err => console.log(err));;
        mongoose.Promise = global.Promise;

      
    }
};

module.exports = config;