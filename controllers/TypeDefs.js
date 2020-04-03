const { gql } = require('apollo-server-express');

let typeDefs = gql`
    type Query {
        user(id : String!) : User
        allUsers(page : Int , limit : Int) : UsersResult
        login(username: String!, password: String!) : Login
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

    type Login {
        name : String
        username : String
        opponent : String
        family : String
    }
`;
module.exports = typeDefs;