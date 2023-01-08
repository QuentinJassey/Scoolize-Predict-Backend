const jwt = require("jsonwebtoken");
    const secret =
      "bkjscdxcvqdiuycbxklfbdxsgfgvbtdgxfcvcZDZAZEY5YTYUYJHTHBV5ERZD3R4T4Y5YO9OPOINO°¨%POK.M+¨MP%/ML.+M+0JHKGUJYFTYGFE4221E3R3457898OOI75TG8OMNILKBIUYVHCXQZEWXDRCFXQSFGHE22143T54Y678798P0O8PIBGIBHK/L/LK+M/%+M/%+POJ/HGFRTDEERERFGTFEDFRETREAQFEA1A#1R34RRUYCFQDSDFBK.LINL7KTVFHG";
    
    const verifyToken = async (req, res, next) => {
      let defaultToken = req.headers.token;
    
      try {
        if (defaultToken) {
          let token = defaultToken.split(" ")[1];
          let tokencontent = await jwt.verify(token, secret);
    
          req.id = tokencontent.id;
          req.role = tokencontent.role;
          next();
        } else {
          return res
            .status(401)
            .json("you must be connected to perform this action");
        }
      } catch (err) {
        return res.status(401).json(err);
      }
    };
    
    const verifyTokenAndAuthorization = async (req, res, next) => {
      try {
        verifyToken(req, res, () => {
          if (
            req.params.id == req.id ||
            req.role == "admin" ||
            req.role == "superAdmin"
          ) {
            next();
          } else {
            res.status(401).json("you are not allowed to perform this action");
          }
        });
      } catch (err) {}
    };
    
    const verifyTokenAndIsadmin = async (req, res, next) => {
      try {
        verifyToken(req, res, () => {
          if (req.role == "admin" || req.role == "superAdmin") {
            next();
          } else {
            res.status(401).json("you are not allowed to perform this action");
          }
        });
      } catch (err) {}
    };
    
    const verifyTokenAndIssuperAdmin = async (req, res, next) => {
      try {
        verifyToken(req, res, () => {
          if (req.role == "superAdmin") {
            next();
          } else {
            res.status(401).json("you are not allowed to perform this action");
          }
        });
      } catch (err) {}
    };

    
const verifyTokenAndIsstudent = async (req, res, next) => {
          try {
            verifyToken(req, res, () => {
              if (req.role == "student" || req.role == "admin" || req.role == "superAdmin"  ) {
                next();
              } else {
                res.status(401).json("you are not allowed to perform this action");
              }
            });
          } catch (err) {}
        };
const verifyTokenAndIsteacher = async (req, res, next) => {
          try {
            verifyToken(req, res, () => {
              if (req.role == "teacher" || req.role == "admin" || req.role == "superAdmin"  ) {
                next();
              } else {
                res.status(401).json("you are not allowed to perform this action");
              }
            });
          } catch (err) {}
        };
const verifyTokenAndIsheadmasterLycee = async (req, res, next) => {
          try {
            verifyToken(req, res, () => {
              if (req.role == "headmasterLycee" || req.role == "admin" || req.role == "superAdmin"  ) {
                next();
              } else {
                res.status(401).json("you are not allowed to perform this action");
              }
            });
          } catch (err) {}
        };
const verifyTokenAndIsheadmasterHighschool = async (req, res, next) => {
          try {
            verifyToken(req, res, () => {
              if (req.role == "headmasterHighschool" || req.role == "admin" || req.role == "superAdmin"  ) {
                next();
              } else {
                res.status(401).json("you are not allowed to perform this action");
              }
            });
          } catch (err) {}
        };
   
     module.exports = {
      verifyToken,
      verifyTokenAndAuthorization,
      verifyTokenAndIsadmin,
      verifyTokenAndIssuperAdmin,

      verifyTokenAndIsstudent,verifyTokenAndIsteacher,verifyTokenAndIsheadmasterLycee,verifyTokenAndIsheadmasterHighschool
    };
    