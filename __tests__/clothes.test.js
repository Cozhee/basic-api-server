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

describe('Clothes route tests', () => {

  describe('Route Tests', ()=> {
    test('Create clothes item', async() => {
      const body = {name: 'Top'}
      const response = await request.post('/clothes').send(body)
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Top')
    })

    test('Get from ID', async() => {
      const response = await request.get('/clothes/1')
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Top')
    })

    test('Get all food', async() => {
      const response = await request.get('/clothes')
      expect(response.status).toEqual(200)
      expect(response.body[0].name).toEqual('Top')
    })

    test('Update food item', async() => {
      const body = {name: 'Bottom'}
      const response = await request.put('/clothes/1').send(body)
      expect(response.status).toEqual(200)
      expect(response.body.name).toEqual('Bottom')
    })

    test('Delete food item', async() => {
      const response = await request.delete('/clothes/1')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({})
    })

  })
})
