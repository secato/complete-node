const expect = require('expect')
const rewire = require('rewire')

const app = rewire('./app')

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call saveUser with the user object', () => {
    const email = 'test@gmail.com'
    const password = '123abc'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({ email, password })
  })

  // it('should call the spy correctly', () => {
  //   const spy = expect.createSpy()
  //   spy('Felipe', 25)
  //   // expect(spy).toHaveBeenCalled()
  //   expect(spy).toHaveBeenCalledWith('Felipe', 25)
  // })
})
