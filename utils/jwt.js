const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesResponse = ({res, user})=>{
    const token = createJWT({payload:user})

    const aDay = 1000*60*60*24
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(
        Date.now() + aDay
      ),
      secure:process.env.NODE_ENV ==="production",
      sign:true
    });

    res.status(200).json({
        success: true,
        user,
       
      });
  
}

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesResponse
};


