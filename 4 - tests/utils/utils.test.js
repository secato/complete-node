const expect = require('expect')
const { add, square, setName, asyncAdd, asyncSquare } = require('./utils')

describe('Utils tests', () => {
  describe('sum functions', () => {
    it('should add two numbers', () => {
      expect(add(43, 25))
        .toBeA('number')
        .toBe(68)

      // example without assertion library
      // if (res !== 68.000) {
      //   throw new Error(`expected 68, but got ${res}`)
      // }
    })

    // NOTE THAT EXPECT NEVER RUN BECAUSE IT IS ASYNC
    // SO THE THEST WILL PASS EVEN IT IS WRONG
    it('Should async add two numbers', done => {
      // to bypass this we use the DONE argument so mocha knows that means it is a async test
      asyncAdd(2, 3, sum => {
        expect(sum)
          .toBe(5)
          .toBeA('number')

        // call done after assertions
        done()
      })
    })
  })

  describe('Square functions', () => {
    it('should square', () => {
      expect(square(2))
        .toBeA('number')
        .toNotBe(4.0000000001)
        .toNotBe(3.99999999999999)
        .toBe(4)

      expect(square(3))
        .toBeA('number')
        .toNotBe(9.01)
        .toNotBe(8.99)
        .toBe(9)
    })

    it('should async square', done => {
      asyncSquare(2, square => {
        expect(square)
          .toBe(4)
          .toBeA('number')
          .toNotBe(3.999999999)

        done()
      })
    })
  })

  // should verify first and last names are set
  it('should have first and last name', () => {
    const user = { age: 28, email: 'mocha@fake.test.fake' }
    setName(user, 'Felipe Secato')

    expect(user)
      .toInclude({ firstName: 'Felipe' })
      .toInclude({ lastName: 'Secato' })
  })
})
