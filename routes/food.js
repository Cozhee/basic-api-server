'use strict'

const express = require('express')
const { FoodModel } = require('../models/index')
const router = express.Router()

router.post('/food', async(request, response) => {
  const food = request.body
  try {
    const newFood = await FoodModel.create(food)
    response.status(200).send(newFood)
  } catch(err) {
    response.status(404).send('Could not create food object')
  }
})

router.get('/food/:id', async(request, response) => {
  const id = request.params.id
  try {
    const selectedFood = await FoodModel.findOne({where: { id: id }})
    response.status(200).send(selectedFood)
  } catch(err) {
    response.status(404).send(`Could not find food with id of: ${id}`)
  }
})

router.get('/food/', async(request, response) => {
  try {
    const allFoods = await FoodModel.findAll({})
    response.status(200).send(allFoods)
  } catch(err) {
    response.status(404).send('Could not find foods')
  }
})

router.put('/food/:id', async(request, response) => {
  const id = request.params.id
  const updatedFood = request.body
  try {
    const selectedFood = await FoodModel.findOne({where: { id: id }})
    await selectedFood.update(updatedFood)
    await selectedFood.save()
    response.status(200).send(selectedFood)
  } catch(err) {
    response.status(404).send(`Could not update food with id of: ${id}`)
  }
})

router.delete('/food/:id', async(request, response) => {
  const id = request.params.id
  try {
    const foodItemToDelete = await FoodModel.findOne({where: { id: id }})
    await foodItemToDelete.destroy()
    response.status(200).send(foodItemToDelete)
  } catch(err) {
    response.status(404).send(`Could not delete food item with id ${id}`)
  }
})

module.exports = router;
