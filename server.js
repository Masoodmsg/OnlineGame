const express = require('express');
const routers = require('./routers')
const config = require('./config')
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express()

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

app.use(bodyParser.text({type: '*/*'}));
app.use('/', routers.getRouter());
app.use('/Assets', express.static(__dirname + '/Viewes/Assets'))//path.join(this.rootDir, 'Viewes')
app.use('/Assets/Images', express.static(__dirname + '/Viewes/Assets/Images'))

server.applyMiddleware({ app });

app.listen(config.port, config.host, config.appStart());
