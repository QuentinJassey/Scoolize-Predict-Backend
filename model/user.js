const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  
  
  const userSchema = new Schema({
    
    username: { type: String, unique: true },userpassword: { type: String },userrole: { type: String , default : 'basic' },useravatar: {type: String , default : 'default.png'},usercart : [{product : {type : Schema.Types.ObjectId , ref : 'product'} , quantity : Number}]
  
  });
  
  module.exports = mongoose.model("user", userSchema);