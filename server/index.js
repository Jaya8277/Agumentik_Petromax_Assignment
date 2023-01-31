require("dotenv").config()

const express = require('express')

// const mongoose = require('mongoose');
const connection = require("./config");
const app = express();
const adminpanel = require('./model/adminpanel');

const cors = require('cors');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());      

app.get("/", (req,res)=> {
    res.send("Home Page of admin");
})




const PORT = process.env.PORT || 8080

app.listen(PORT, (connection)=>  {
    try{
        connection
        console.log("database connect")
    }catch(err){
        console.log(err)
    }
    console.log("successfully server running on 8080");
})