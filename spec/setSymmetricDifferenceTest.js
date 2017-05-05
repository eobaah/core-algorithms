import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import setSymmetricDifference from '../src/setSymmetricDifference'

chai.use(chaiChange)

describe('setSymmetricDifference', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })
  it('Checks symmetric difference of two arrays', function(){
    const arr1 = [1,2,3,4]
    const arr2 = [2,4,6,8]
    expect( setSymmetricDifference(arr1, arr2) ).to.eql([1,3,6,8])
  })
  it('Checks symmetric difference of two arrays', function(){
    const arr1 = [1,2,3,4]
    const arr2 = [8,10,12,14]
    expect( setSymmetricDifference(arr1, arr2) ).to.eql([1,2,3,4,8,10,12,14])
  })
})
