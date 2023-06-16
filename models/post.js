const {DataTypes}=require('sequelize')
const sequelize=require('../config/database')


const Post=sequelize.define('posts',{
    id:{
        type:DataTypes.INTEGER,
        // allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false
});


module.exports=Post;