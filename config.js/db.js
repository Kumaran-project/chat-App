const {Sequelize,DataTypes}=require("sequelize");
const sequelize=new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,{
  dialect:'mysql',
  host: 'localhost'
})

module.exports={sequelize,DataTypes}

