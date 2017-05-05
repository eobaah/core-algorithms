import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import factorial from '../src/factorial'

chai.use(chaiChange)

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })
  it('Checks 5 factorial', function(){
    expect( factorial(5) ).to.equal(120)
  })
  it('Checks 0 factorial', function(){
    expect( factorial(0) ).to.equal(1)
  })
  it('Checks 5 factorial', function(){
    expect( factorial(-1) ).to.equal(-1)
  })
  it('Checks 5 factorial', function(){
    expect( factorial(12) ).to.equal(479001600)
  })
})
