'use strict'
require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize')
const FoodSchema = require('./food')
const ClothesSchema = require('./clothes')

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || `postgres://${process.env.USERNAME}:${process.env.PW}${process.env.HOST}:5432/${process.env.DB_NAME}`

const sequelize = new Sequelize(DATABASE_URL)

// use this code when deploying
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
