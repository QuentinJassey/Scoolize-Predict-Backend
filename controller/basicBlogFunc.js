
const basicBlogFunc = require('../model/basicBlogFunc')



  exports.getbasicBlogFunc = async(req, res) => {
    try {
        let foundbasicBlogFunc = await basicBlogFunc.find();
        res.json(foundbasicBlogFunc);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

  exports.postbasicBlogFunc = async(req, res) => {
    try {
        let basicBlogFuncDraft =  new basicBlogFunc(req.body);
    
        let postedbasicBlogFunc = await basicBlogFuncDraft.save()
        res.json(postedbasicBlogFunc);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };



  exports.getOnebasicBlogFunc = async(req, res) => {
    try {
        let foundbasicBlogFunc = await basicBlogFunc.findById(req.params.id);
        res.json(foundbasicBlogFunc);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

  exports.updatebasicBlogFunc = async(req, res) => {
    try {
        let updatedbasicBlogFunc = await basicBlogFunc.findByIdAndUpdate(req.params.id , req.body , {new : true});
        res.json(updatedbasicBlogFunc);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };


  exports.deletebasicBlogFunc = async(req, res) => {
    try {
        let deletedbasicBlogFunc = await basicBlogFunc.findByIdAndDelete(req.params.id);
        res.json(deletedbasicBlogFunc);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };