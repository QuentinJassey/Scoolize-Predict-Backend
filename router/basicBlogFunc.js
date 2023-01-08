const {
      verifyToken,
      verifyTokenAndAuthorization,
      verifyTokenAndIsadmin,
      verifyTokenAndIssuperAdmin,

      verifyTokenAndIsstudent,verifyTokenAndIsteacher,verifyTokenAndIsheadmasterLycee,verifyTokenAndIsheadmasterHighschool
    } = require('../middlewares/jwtVerify.js')//sep

 const express = require("express")
const router = express.Router()


  let {getbasicBlogFunc ,  postbasicBlogFunc , updatebasicBlogFunc , deletebasicBlogFunc , getOnebasicBlogFunc , } = require('../controller/basicBlogFunc.js')



  

  router.get("/basicBlogFunc", getbasicBlogFunc)

  router.post("/basicBlogFunc", postbasicBlogFunc)
  router.put("/basicBlogFunc/:id", updatebasicBlogFunc)
  router.delete("/basicBlogFunc/:id", deletebasicBlogFunc)
  router.get("/basicBlogFunc/:id", getOnebasicBlogFunc)

  

  exports.basicBlogFunc = router
  