
const user = require('../model/user')

let bcryptjs = require('bcryptjs')
let jsonwebtoken = require('jsonwebtoken')
let util = require('util')
const salt = bcryptjs.genSaltSync(10)
const secret = "bkjscdxcvqdiuycbxklfbdxsgfgvbtdgxfcvcZDZAZEY5YTYUYJHTHBV5ERZD3R4T4Y5YO9OPOINO°¨%POK.M+¨MP%/ML.+M+0JHKGUJYFTYGFE4221E3R3457898OOI75TG8OMNILKBIUYVHCXQZEWXDRCFXQSFGHE22143T54Y678798P0O8PIBGIBHK/L/LK+M/%+M/%+POJ/HGFRTDEERERFGTFEDFRETREAQFEA1A#1R34RRUYCFQDSDFBK.LINL7KTVFHG"
const exec = util.promisify(require("child_process").exec);
  
exports.getuser = async(req, res) => {
    try {
        let founduser = await user.find();
        res.json(founduser);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

  exports.getOneuser = async(req, res) => {
    try {
        let founduser = await user.findById(req.params.id);
        res.json(founduser);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

  exports.deleteuser = async(req, res) => {
    try {
        let deleteduser = await user.findByIdAndDelete(req.params.id);
        res.json(deleteduser);
      } catch {
        res.status(409).json("There was an error please try again later");
      }
  };

        exports.register = async (req, res) => {

          

           try {
            req.body.userpassword = await bcryptjs.hash(req.body.userpassword, salt)

             
             req.files[0] ?  req.body.useravatar=req.files[0].filename  : ""
              let userDraft = new user(req.body)


              

              
              let posteduser = await userDraft.save()

             
              res.json(posteduser)

           } catch (err) {
               console.log(err)

              res.status(409).json("There was an error please try again later")

          }
          }


 exports.login = async (req, res) => {


         
          try {

            let foundUser = await user.findOne({ username: req.body.username })


            let hash = foundUser.userpassword

           
            let isGoodPassword = await bcryptjs.compare(req.body.userpassword, hash)

        
        
            console.log(isGoodPassword)

            if (isGoodPassword) {
              let token = jsonwebtoken.sign(
                {
                  id: foundUser._id,
                  role: foundUser.userrole,
                },
                secret
              )

        
            
              res.json({ foundUser, token })

            } else {
              res.json("wrong credentials")

            }
          } catch {
            res.status(409).json("wong credentials")

          }
          }


 exports.updateusercontent = async (req, res) => {


         
          try {
            let olduser = await user.findById(req.params.id)

        
            if (req.files[0]) {
              let { stdout, stderr } = await exec("ls", { cwd: "./uploads" })

        
              console.log(
                stdout.includes(olduser.useravatar),
                "////////",
                olduser.useravatar
              )

        
              olduser.useravatar != "default.png"
                ? await exec(
                  "rm " + olduser.useravatar, { cwd: "./uploads" })
                
                : ""

            }
        
            console.log(req.files)

        
            req.files[0]
              ? (req.body.useravatar = req.files[0].filename)
              : (req.body.useravatar = olduser.useravatar)

            console.log("meow")

        
            let { userpassword, ...other } = req.body

        
            let updatedUser = await user.findByIdAndUpdate(req.params.id, other, {
              new: true,
            })

        
            res.json(updatedUser)

          } catch (err) {
            res.status(409).json(err)

          }
          }


 exports.updateuserpassword = async (req, res) => {

          try {
            let foundUser = await user.findById(req.params.id)

        
            let hash = foundUser.userpassword

        
            let isGoodPassword = await bcryptjs.compare(req.body.userpassword, hash)

        
            console.log(isGoodPassword)

            if (isGoodPassword) {
              req.body.userpassword = await bcryptjs.hash(req.body.newpassword, salt)

        
              let updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
              })

              res.json(updatedUser)

            } else {
              res.json("wrong credentials")

            }
          } catch (err) {
            console.log(err)

            res.status(409).json("wong credentials")

          }
          }


 exports.addtocart = async (req, res) => {

          

          try {
            let usertopushin = await user.findById(req.id);
        
            usertopushin.usercart = req.body.cart;
        
            let saved = await usertopushin.save();
            // console.log(saved.usercart);
            res.json(saved);
          } catch (err) {
            console.log(err);
        
            res.status(409).json("There was an error please try again later");
          }
          }


 
        