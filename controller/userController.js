const User=require('../models/user')
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')
const JwtConfig=require('../config/jwt-config')
const jwtMiddleware=require('../config/jwt-middleware')

const Sequelize=require('sequelize')

// const { QueryTypes } = require('sequelize'); // for raw query

// for raw-query we need to create sequelize instance --------------------

const sequelize = new Sequelize('dbjwt', 'root', 'codefire', {
    host: 'localhost',
    dialect: 'mysql',
  });
//------------------------------------------------------------------


// for raw query -------------------------------------------------
const rawQuery1=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select name from users");
    if(results){
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }else{
        res.status(500).json({
            status:0,
            message:'invalid request',
            
        })
    }

}


const rawQuery2=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where status=1");
    if(results){
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }else{
        res.status(500).json({
            status:0,
            message:'invalid request',
            
        })
    }

}


const rawQuery3=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users order by id desc");
    if(results){
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }else{
        res.status(500).json({
            status:0,
            message:'invalid request',
            
        })
    }

}


const rawQuery4=async(req,res)=>{
    const [results, metadata] = await sequelize.query("alter table users add age int");
    if(results){
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }else{
        res.status(500).json({
            status:0,
            message:'invalid request',
            
        })
    }

}


const rawQuery5=async(req,res)=>{
    const [results, metadata] = await sequelize.query("delete from users where status=0");
    if(results){
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }else{
        res.status(500).json({
            status:0,
            message:'invalid request',
            
        })
    }

}


const rawQuery6=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where id=3 and status=1");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery7=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where not id=3");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery8=async(req,res)=>{
    const [results, metadata] = await sequelize.query("insert into users (name,email,status) values('kkk','jk@gmail.com',0)");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery9=async(req,res)=>{
    const [results, metadata] = await sequelize.query("update users set name='pathaan3', email='pathaan@codefire.in', status=0 where id=2");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery10=async(req,res)=>{
    const [results, metadata] = await sequelize.query("delete from users where id=4");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery11=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users limit 1");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery12=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select min(status) from users where status > -100");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery13=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select count(status) from users");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery14=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select sum(status) from users where status>0");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery15=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select avg(status) from users where status>0");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery16=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where name like 'p%'");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery17=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where status in (0,-9)");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery18=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select * from users where status between -9 and -2");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

// Alias query
const rawQuery19=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select name as student_name from users");
   
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}
  
const rawQuery20=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select id from users union select status from users");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery21=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select count(status), name from users group by name");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery22=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select count(status), name from users group by name having count(status)>1");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery23=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select name,email, case when status >0 then 'positive value' when status =0 then 'equal to zero' else 'negative value' end as informationData from users");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}


const rawQuery24=async(req,res)=>{
    const [results, metadata] = await sequelize.query("alter table users add unique(status)");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery25=async(req,res)=>{
    const [results, metadata] = await sequelize.query("alter table users alter status set default 100");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

const rawQuery26=async(req,res)=>{
    const [results, metadata] = await sequelize.query("create view view_table2 as select name, status from users where status<0");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}


// Inner Join
const rawQuery27=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select users.email,users.status,users2.contact,users2.username from users inner join users2 on users.status=users2.productid");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

// Left Join
const rawQuery28=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select users.email,users.status,users2.contact,users2.username from users left join users2 on users.status=users2.productid");
    try{
        res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}


const rawQuery29=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select name from users union all select contact from users2");
      try{  
            res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}

// EXISTS
const rawQuery30=async(req,res)=>{
    const [results, metadata] = await sequelize.query("select name from users where exists(select username from users2 where users2.productid=users.status and contact <900)");
      try{  
            res.status(200).json({
            status:1,
            message:"valid request",
            data:results});
    }catch(error){
        res.status(500).json({
            status:0,
            message:'invalid request',
            data:error
            
        })
    }

}





// Register user api
const registerUser=async(req,res)=>{ 
    let info={
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10),
        status:req.body.status
    }

        const email=req.body.email;
        const user=await User.findOne({where:{email:email}}).then((user)=>{
            if(user){
                res.status(200).json({
                    status:0,
                    message:"email already exists"
                })
            }
            else{
                User.create(info)
                res.status(200).json({
                    status:1,
                    message:"data inserted successfully"   
                 })
            }
        }).catch((error)=>{
            console.log(error)
        res.status(500).json({
            status:0,
            data:error
        })
    })
}




// Login user api
const loginUser=async(req,res)=>{
    const user=await User.findOne({where:{email:req.body.email}})
    .then((user)=>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){

            // Generating user token by sign method
                let userToken=JWT.sign({
                    email:user.email,
                    id:user.id,
                    status:user.status
                }, JwtConfig.secret, {
                    expiresIn:JwtConfig.expiresIn,
                    notBefore:JwtConfig.notBefore,
                    audience:JwtConfig.audience,
                    issuer:JwtConfig.issuer,
                    algorithm:JwtConfig.algorithm
                    
                })
                res.status(200).json({
                    status:1,
                    message:"user logged in successfully",
                    token:userToken
                })
            }
            else{
                res.status(500).json({
                    status:0,
                    message:"password didn't matched"
                })
            }
        }
        else{
            res.status(500).json({
                status:0,
                message:"user doesn't exists with this email address"
            })
        }
    }).catch((error)=>{
        console.log(error)
    })
}

const validToken=async(req,res)=>{
    let userToken=req.headers["authorization"];

    if(userToken){
        JWT.verify(userToken, JwtConfig.secret, (error, decoded)=>{
            if(error){
                // console.log(error)
                res.status(500).json({
                    status:0,
                    message:"Invalid token",
                    data:error
                })
            }else{
                // console.log(decoded)
                res.status(200).json({
                    status:1,
                    message:"Token is valid",
                    data:decoded
                })
            }
        })
    }else{
        res.status(500).json({
            status:0,
            message:"please provide valid authentication token value"

        })
    }
}



const middlewareValidationToken=async(req,res)=>{
// const userss=await jwtMiddleware.checkToken(req,res)
    res.status(200).json({
        status:1,
        userdata:req.user,
        message:"Token value parsed"
    });
}

module.exports={registerUser, loginUser, validToken, middlewareValidationToken, 
    rawQuery1, rawQuery2, rawQuery3, rawQuery4, rawQuery5, 
    rawQuery6, rawQuery7, rawQuery8, rawQuery9, rawQuery10, 
    rawQuery11, rawQuery12, rawQuery13, rawQuery14, rawQuery15,rawQuery16,
    rawQuery17, rawQuery18, rawQuery19, rawQuery20, rawQuery21, rawQuery22, rawQuery23, 
    rawQuery24, rawQuery25, rawQuery26, rawQuery27, rawQuery28, rawQuery29, 
    rawQuery30};
 