const express = require('express');
const routers = require('./routers');
const config = require('./config');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./controllers/TypeDefs');
const resolvers = require('./controllers');



const app = express()
// Provide resolver functions for your schema fields


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.use(bodyParser.text({type: '*/*'}));
app.use('/', routers.getRouter());
app.use('/', express.static(__dirname + '/view/'))//path.join(this.rootDir, 'Viewes')
app.use('/Assets/Images', express.static(__dirname + '/Viewes/Assets/Images'))



app.listen(config.port, config.host, config.appStart());
