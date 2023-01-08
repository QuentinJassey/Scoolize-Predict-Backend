const {
      verifyToken,
      verifyTokenAndAuthorization,
      verifyTokenAndIsadmin,
      verifyTokenAndIssuperAdmin,

      verifyTokenAndIsstudent,verifyTokenAndIsteacher,verifyTokenAndIsheadmasterLycee,verifyTokenAndIsheadmasterHighschool
    } = require('../middlewares/jwtVerify.js')//sep

 const express = require("express")
const router = express.Router()


  let {getuser ,  postuser , updateuser , deleteuser , getOneuser , register,login,updateusercontent,updateuserpassword,addtocart} = require('../controller/user.js')



  

  router.get("/user", getuser)

  
  
  router.delete("/user/:id", deleteuser)
  router.get("/user/:id", getOneuser)

  router.post('/register' , register)
router.post('/login' , login)
router.put('/updateusercontent/:id' , updateusercontent)
router.put('/updateuserpassword/:id' , updateuserpassword)
router.post('/addtocart' , addtocart)

  exports.user = router
  