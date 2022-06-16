'use strict'
require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize')
const FoodSchema = require('./food')
const ClothesSchema = require('./clothes')

const sequelize = new Sequelize(`postgres://${process.env.USERNAME}:${process.env.PW}${process.env.HOST}:5432/${process.env.DB_NAME}`, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

// // use this code when deploying
// {
//   dialectOptions: {
//     ssl: {
//       require: true,
//         rejectUnauthorized: false
//     }
//   }
// }

const FoodModel = FoodSchema(sequelize, DataTypes)
const ClothesModel = ClothesSchema(sequelize, DataTypes)

module.exports = {sequelize, FoodModel, ClothesModel}
