import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import fizzBuzz from '../src/fizzBuzz'

chai.use(chaiChange)

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('Checks index and replaces multiples of both 3 AND 5 with FizzBuzz and then only multiples of 3 with Fizz or only multiples of 5 with Buzz', function(){
    fizzBuzz()
    expect( fizzBuzz()[3] ).to.equal('Fizz')
    expect( fizzBuzz()[5] ).to.equal('Buzz')
    expect(fizzBuzz()[6]).to.equal('Fizz')
    expect(fizzBuzz()[9]).to.equal('Fizz')
    expect(fizzBuzz()[10]).to.equal('Buzz')
    expect(fizzBuzz()[12]).to.equal('Fizz')
    expect(fizzBuzz()[15]).to.equal('FizzBuzz')
    expect(fizzBuzz()[18]).to.equal('Fizz')
    expect(fizzBuzz()[20]).to.equal('Buzz')
    expect(fizzBuzz()[21]).to.equal('Fizz')
    expect(fizzBuzz()[24]).to.equal('Fizz')
    expect(fizzBuzz()[25]).to.equal('Buzz')
    expect(fizzBuzz()[27]).to.equal('Fizz')
    expect(fizzBuzz()[30]).to.equal('FizzBuzz')
    expect(fizzBuzz()[33]).to.equal('Fizz')
    expect(fizzBuzz()[35]).to.equal('Buzz')
    expect(fizzBuzz()[36]).to.equal('Fizz')
    expect(fizzBuzz()[39]).to.equal('Fizz')
    expect(fizzBuzz()[40]).to.equal('Buzz')
    expect(fizzBuzz()[42]).to.equal('Fizz')
    expect(fizzBuzz()[45]).to.equal('FizzBuzz')
  })
})
