const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({

    username: String,
    post: String,
   
})
module.exports= mongoose.model("admindata", AdminSchema);