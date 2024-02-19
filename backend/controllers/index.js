const Book=require('../db/BookModel');
const getAllBooks=async(req,res)=>{
    const book=await Book.find({});
    res.json({
        count:book.length,
        data:book
    })
}
const createBook=async(req,res)=>{
    const newBook=req.body;
    const book =await Book.create({...newBook})
    res.json({...newBook});
}
const getBook=async(req,res)=>{
    const {id}=req.params;
    const book =await Book.find({_id:id});
    res.json({data:book});
}
const deleteBook=async(req,res)=>{
    const {id}=req.params;
    const book =await Book.findOneAndDelete({_id:id});
    res.json({data:book});
}
const updateBook=async(req,res)=>{
    const newBook=req.body;
    const book =await Book.findOneAndUpdate(newBook);
    const book2=await Book.findOne({_id:book._id});
    res.json({data:book2});
}



module.exports={getAllBooks,createBook,getBook,updateBook,deleteBook}