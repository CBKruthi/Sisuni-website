require('dotenv').config();
const jwt=require('jsonwebtoken');
const admin=process.env.ADMIN_USERNAME;
const pass=process.env.ADMIN_PASSWORD;
const JWT_SECRET=process.env.JWT_SECRET;

module.exports.adminLogin =(req,res)=>{
    const {username, password} =req.body;

    if(username===admin && password===pass){
        const token=jwt.sign({username}, JWT_SECRET,{
            expiresIn:'1h',
        });
        res.status(200).json({token});
    }else{
        res.status(401).json({message:"Invalid credentials"
        })
    }
};
