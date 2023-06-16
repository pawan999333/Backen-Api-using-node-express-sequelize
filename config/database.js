const Sequelize=require('sequelize')
const sequelize=new Sequelize('crudapi1','root','codefire', {
                    host:"localhost",
                    dialect:"mysql"
})

module.exports=sequelize;