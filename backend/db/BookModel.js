const mongoose=require('mongoose');

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'please provide book title'],
        maxlength:50
    },
    author:{
        type:String,
        required:[true,'please provide book author'],
        maxlength:50
    },
    publisher:{
        type:String,
        required:[true,'please provide book publisher'],
        maxlength:50
    },

},{timestamps:true})
module.exports=mongoose.model('Book',bookSchema);