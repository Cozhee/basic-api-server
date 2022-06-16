'use strict'

const express = require('express')
const { ClothesModel } = require('../models/index')
const router = express.Router()

router.post('/clothes', async(request, response) => {
  const clothes = request.body
  try {
    const newClothes = await ClothesModel.create(clothes)
    response.status(200).send(newClothes)
  } catch(err) {
    response.status(404).send('Could not create clothes object')
  }
})

router.get('/clothes/:id', async(request, response) => {
  const id = request.params.id
  try {
    const selectedClothes = await ClothesModel.findOne({where: { id: id }})
    response.status(200).send(selectedClothes)
  } catch(err) {
    response.status(404).send(`Could not find clothes with id of: ${id}`)
  }
})

router.get('/clothes', async(request, response) => {
  try {
    const allClothes = await ClothesModel.findAll({})
    response.status(200).send(allClothes)
  } catch(err) {
    response.status(404).send('Could not find clothes')
  }
})

router.put('/clothes/:id', async(request, response) => {
  const id = request.params.id
  const updatedClothes = request.body
  try {
    const selectedClothes = await ClothesModel.findOne({where: { id: id }})
    await selectedClothes.update(updatedClothes)
    await selectedClothes.save()
    response.status(200).send(selectedClothes)
  } catch(err) {
    response.status(404).send(`Could not update clothes with id of: ${id}`)
  }
})

router.delete('/clothes/:id', async(request, response) => {
  const id = request.params.id
  try {
    const ClothesItemToDelete = await ClothesModel.findOne({where: { id: id }})
    await ClothesItemToDelete.destroy()
    response.status(200).send(ClothesItemToDelete)
  } catch(err) {
    response.status(404).send(`Could not delete clothes item with id ${id}`)
  }
})

module.exports = router;
