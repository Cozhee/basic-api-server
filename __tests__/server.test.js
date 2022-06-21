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
  await sequelize.close()
});

describe('Server Tests', () => {

  describe('Error Handler Tests', () => {

    test('404 on bad route', async() => {
      const response = await request.get('/foo')
      expect(response.status).toEqual(404)
      expect(response.text).toEqual('Not Found')
    })

    test('404 on bad method', async() => {
      const response = await request.post('/foo')
      expect(response.status).toEqual(404)
      expect(response.text).toEqual('Not Found')
    })

  })
})
