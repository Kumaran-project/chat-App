const {sequelize,DataTypes}=require("../config.js/db");

const user=sequelize.define("user",
  {
    userName:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    phoneNumber:{
      type:DataTypes.NUMBER,
      allowNull:false,
    },
      
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
    }
  }
);

module.exports=user;