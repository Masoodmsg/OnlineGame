const  UserController = require( "./UserController")


let Query = Object.assign({}, UserController)
let resolvers = { Query }

module.exports = resolvers