const {sequelize,DataTypes}=require("../config.js/db");

const group=sequelize.define("group",{
  groupName:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  }
})

module.exports=group;