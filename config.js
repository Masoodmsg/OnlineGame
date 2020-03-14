//var util = require('./Common/Utility');

var config = {
    debug: true,
    host: 'localhost',
    port: 3008,

    dbconfig: {
        //server: 'MASOOD\\MASOODSQL2017',
        server: 'MASOOD\\SQL2019',
        user: 'sa',
        password: '123',
        // server: 'WEBSERVER\\SQL2017',
        // user: 'user1',
        //password: 'Maha123',
        database: 'OnlineHRS',
        options: {
            trustedConnection: true
        },
        connectionString: 'Server=MASOOD\MASOODSQL2017;Database=OnlineHRS;Trusted_Connection=True;MultipleActiveResultSets=true;'
    },


    async appStart() {

     
            console.log('app runing on port ' + config.port.toString());
    }
};

module.exports = config;