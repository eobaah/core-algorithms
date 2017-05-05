import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import setIntersection from '../src/setIntersection'

chai.use(chaiChange)

describe('setIntersection', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })
  it('Checks intersection of two arrays', function(){
    const topArr = [1,2,3,4]
    const mainArr = [2,4,6,8]
    expect( setIntersection(topArr, mainArr) ).to.eql([2,4])
  })
  it('Checks intersection of two arrays', function(){
    const topArr = [6,7,8,9]
    const mainArr = [2,4,6,8]
    expect( setIntersection(topArr, mainArr) ).to.eql([6,8])
  })
})
