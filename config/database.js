const Sequelize=require('sequelize')
const sequelize=new Sequelize('dbjwt','root','codefire',{
        host:"localhost",
        dialect:"mysql"
});

module.exports=sequelize;