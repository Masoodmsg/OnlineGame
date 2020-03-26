const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const userSchema = mongoose.Schema({
    name: { type: 'string'  },
    family: { type: 'string'  },
    username: { type: 'string' },
    password: { type: 'string' },
    opponent: { type: 'string' }
} );

userSchema.plugin(mongoosePaginate);

//userSchema.virtual('articles' , {
//    ref : 'Article',
//    localField : '_id',
//    foreignField : 'user'
//})

//export default mongoose.model('Users', userSchema);
module.exports = mongoose.model('Users' , userSchema,'Users');