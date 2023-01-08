const mongoose = require("mongoose");

  const Schema = mongoose.Schema;
  
  
  
  const basicBlogFuncSchema = new Schema({
    
    basicBlogFuncimg : {type:String},basicBlogFunctitle : {type:String},basicBlogFunccontent : {type:String}
  
  });
  
  module.exports = mongoose.model("basicBlogFunc", basicBlogFuncSchema);