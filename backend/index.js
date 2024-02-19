const express=require('express');
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const cors=require('cors');
const port=process.env.PORT || 5000;
const allRoutes=require('./routes');

app.use(express.json());
app.use(cors());
app.use('/api/v1',allRoutes);
const start=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`App is listening at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();