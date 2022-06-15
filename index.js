const {sequelize, FoodModel, ClothesModel }  = require('./models/index')

sequelize.sync().then(() => {
  console.log('Connection has been established successfully.');
  FoodModel.create({name: 'Pasta'})
  ClothesModel.create({name: 'Shoes'})
}).catch((err) => {
  console.error('Unable to connect ot the database:', err);
})
