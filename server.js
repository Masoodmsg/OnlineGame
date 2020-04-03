const express = require('express');
const routers = require('./routers');
const config = require('./config');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./controllers/TypeDefs');
const resolvers = require('./controllers');

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('uncaughtExceptionMonitor', err);
    console.log('uncaughtExceptionMonitor', origin);
});
process.on('uncaughtException', (err, origin) => {
    console.log('uncaughtException', err);
    console.log('uncaughtException', origin);
});


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Provide resolver functions for your schema fields


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.use(bodyParser.text({type: '*/*'}));
app.use('/', routers.getRouter());
app.use('/', express.static(__dirname + '/view/'));//path.join(this.rootDir, 'Viewes')
app.use('/view/assets/games/Go', express.static(__dirname + '/view/assets/games/Go'));

global.WebSocket = io;


http.listen(config.port, config.host, config.appStart());
