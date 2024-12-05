const {sequelize,DataTypes}=require("../config.js/db");

const message=sequelize.define("message",{
  text:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  }
})

module.exports=message;