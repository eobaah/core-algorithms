import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import fibonacci from '../src/fibonacci'

chai.use(chaiChange)

describe('fibonacci()', function(){

  it.only('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })
  it.only('Checks fibonacci of 10', function(){
    expect( fibonacci(10) ).to.eql([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])
  })
  it.only('Checks fibonacci of 3', function(){
    expect( fibonacci(3) ).to.eql([ 0, 1, 1, 2 ])
  })
  it.only('Checks fibonacci of 13', function(){
    expect( fibonacci(13) ).to.deep.equal([ 0,1,1,2,3,5,8,13,21,34,55,89,144,233])
  })
})
