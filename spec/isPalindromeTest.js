import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import isPalindrome from '../src/isPalindrome'

chai.use(chaiChange)

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('Checks if string is the same when reversed', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama') ).to.equal('Is a Palindrome')
    expect(isPalindrome('bananas') ).to.equal('Not a Palindrome')
    expect(isPalindrome('radar') ).to.equal('Is a Palindrome')
    expect(isPalindrome('NEUQUEN') ).to.equal('Is a Palindrome')
  })
})
