const { gql } = require('apollo-server-express')

let typeDefs = gql`
    type Query {
        user(id : String!) : User
        allUsers(page : Int , limit : Int) : UsersResult
        login(usernam: String!, password: String!) : String
    }

    type UsersResult {
        users : [User],
        paginate : Paginate
    }

    type Paginate {
        total : Int,
        limit : Int,
        page  : Int
        pages : Int
    }

    type User {
       name : String
       family : String
       username : String
       password : String
    }

 
`
module.exports = typeDefs