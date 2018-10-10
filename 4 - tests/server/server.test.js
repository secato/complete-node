const request = require('supertest')
const expect = require('expect')
const app = require('./server')

describe('express tests', () => {
  it('sould return hello world response', done => {
    request(app)
      .get('/')
      .expect(404)
      .expect((req, res) => {
        expect(req.body).toInclude({
          error: 'Page not found.'
        })
      })
      .end(done)
  })

  it('/users => should return my user object', done => {
    request(app)
      .get('/users')
      .expect(200)
      .expect(res => {
        expect(res.body).toInclude({
          name: 'Felipe Secato',
          age: 28
        })
      })
      .end(done)
  })
})
