const {DataTypes}=require('sequelize')
const sequelize=require('../config/database')


const User=sequelize.define('users',{
 
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1
    },

},{
    timestamps:false,
    
})

User.sync({alter:true})
module.exports=User