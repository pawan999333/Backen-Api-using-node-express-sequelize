const JwtConfig=require('./jwt-config')
const JWT=require('jsonwebtoken')


let checkToken=(req,res,next)=>{
    
    let userToken=req.headers["authorization"];

    if(userToken){

        JWT.verify(userToken, JwtConfig.secret, {
            algorithms:JwtConfig.algorithm
        }, (error, data) => {
            if(error){
                return res.status(500).json({
                    status:0,
                    message:"Token is not valid",
                    data:error
                })
            }else{
                    req.user=data;
                    next();
            }
        
        })

    }else{
        return res.status(500).json({
            status:0,
            message:"please provide authenication token value"
        })
    }
}


module.exports={checkToken}