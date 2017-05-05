import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import setComplement from '../src/setComplement'

chai.use(chaiChange)

describe('setComplement', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })
  it('Checks complement of two arrays', function(){
    const arr1 = [1,2,3,4]
    const arr2 = [2,4,6,8]
    expect( setComplement(arr1,arr2) ).to.eql([6,8])
  })

  it('Checks complement of two arrays', function(){
    const arr1 = [10,11,12,13]
    const arr2 = [2,4,6,8,10]
    expect( setComplement(arr1,arr2) ).to.eql([2,4,6,8])
  })
})
