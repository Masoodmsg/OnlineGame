const UserModel = require('./../models/UserModel');

const resolver = {

    user: async (parent, args) => await UserModel.findById(args.id),

    allUsers: async (parent, args) => {
        let page = args.page || 1;
        let limit = args.limit || 10;

        let users = await UserModel.paginate({}, { page, limit });

        return {
            users: users.docs,
            paginate: {
                total: users.total,
                limit: users.limit,
                page: users.page,
                pages: users.pages
            }
        };
    },

    login: async (parent, args) => {

        let obj = await UserModel.find({ username: args.username, password: args.password});
       // console.log(obj)
        return obj[0]
    }
};

module.exports = resolver;