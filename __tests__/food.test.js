'use strict'

const supertest = require('supertest')
const { server } = require('../server')
const request = supertest(server)
const { sequelize } = require('../models/index')

beforeAll(async() => {
  await sequelize.sync();
})

afterAll(async() => {
  await sequelize.drop({});
});


describe('Food route tests', () => {

  describe('Route Tests', ()=> {
    test('Create food item', async() => {
      const body = {name: 'Tacos'}
      const response = await request.post('/food').send(body)
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Tacos')
    })

    test('Get from ID', async() => {
      const response = await request.get('/food/1')
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Tacos')
    })

    test('Get all food', async() => {
      const response = await request.get('/food')
      expect(response.status).toEqual(200)
      expect(response.body[0].name).toEqual('Tacos')
    })

    test('Update food item', async() => {
      const body = {name: 'Chicken'}
      const response = await request.put('/food/1').send(body)
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Chicken')
    })

    test('Delete food item', async() => {
      const response = await request.delete('/food/1')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({})
    })

  })
})
