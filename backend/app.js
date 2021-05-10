require('dotenv').config();

const path=require("path");
const bodyParser=require('body-parser');
const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

const ports=process.env.PORT || 3000;

mongoose.connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSOWRD}@cluster0.mvcmf.mongodb.net/${process.env.DATABASE}`,
    {useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    app.listen(ports,console.log(`server is running on port ${ports}`));
})
.catch((err)=>{console.log("Could not connect to the server ",err)})


app.use(bodyParser.json());
app.use(cors());