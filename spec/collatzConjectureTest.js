import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import collatzConjecture from '../src/collatzConjecture'

chai.use(chaiChange)

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })
  it('Checks collatzConjecture of 2', function(){
    expect( collatzConjecture(2) ).to.eql([ 2, 1 ])
  })
  it('Checks collatzConjecture of 7', function(){
    expect( collatzConjecture(7) ).to.eql([ 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1 ])
  })
  it('Checks collatzConjecture of 3', function(){
    expect( collatzConjecture(3) ).to.eql([ 3, 10, 5, 16, 8, 4, 2, 1 ])
  })
})
