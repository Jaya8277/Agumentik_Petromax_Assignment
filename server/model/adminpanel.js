const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({

    // username: {String,default:},
    // post: {String,default:},   
    topleft:{type:String,default:"We Bring Your Ideas To Life"},
    topleft1:{type:String,default:"Monotonectally customize e-business infrastructures throught performance based technology. Intrinsicly fabricate resource sucking interfaces after intuitive networks"},
    topright:{type:String,default:"https://user-images.githubusercontent.com/75311454/215976050-d8f219be-9ac1-4257-9557-b64da38bf246.PNG"},
    bottomleft:{type:String,default:"https://user-images.githubusercontent.com/75311454/216029977-564752b1-4318-483e-bccf-9b777e44c99f.PNG"},
    bottomRight:{type:String,default:"We are Profesional and Talented"},
    bottomRight1:{type:String,default:"Monotonectally customize e-business infrastructures throught performance based technology. Intrinsicly fabricate resource sucking interfaces after intuitive networks.Intrinsicly fabricate resource sucking interfaces after intuitive networks"},
    facebook:{type:String,default:"https://www.facebook.com/"},
    instagram:{type:String,default:"https://www.linkedin.com/"},
    linkedin:{type:String,default:"https://www.instagram.com/"} ,
    twitter:  {type:String,default:"https://twitter.com/"},
    google:  {type:String,default:"https://google.com/"},
    

   
})
module.exports= mongoose.model("admindata", AdminSchema);