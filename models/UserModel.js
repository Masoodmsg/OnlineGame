const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const userSchema = mongoose.Schema({
    name : { type : String , required : true },
    family: { type: String , required : true },
    username : { type : String , required : true},
    password : { type : String ,  required : true },
} , { timestamps : true });

userSchema.plugin(mongoosePaginate);

//userSchema.virtual('articles' , {
//    ref : 'Article',
//    localField : '_id',
//    foreignField : 'user'
//})

//export default mongoose.model('Users', userSchema);
module.exports = mongoose.model('Users' , userSchema);