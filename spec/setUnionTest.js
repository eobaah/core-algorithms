import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import setUnion from '../src/setUnion'

chai.use(chaiChange)

describe('setUnion', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })
  it('Checks complement of two arrays', function(){
    const topArr = [1,2,3,4]
    const mainArr = [2,4,6,8]
    expect( setUnion(topArr, mainArr) ).to.eql([2,4,6,8,1,3])
  })
  it('Checks complement of two arrays', function(){
    const topArr = [5,6,7,8]
    const mainArr = [10,12,14,16]
    expect( setUnion(topArr, mainArr) ).to.eql([10,12,14,16,5,6,7,8])
  })
})
