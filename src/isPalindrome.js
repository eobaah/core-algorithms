export default function isPalindrome(string) {
  let newString = string.replace(/[^a-z]+/ig, '').toLowerCase().split('')
  let start = 0
  let end = newString.length-1
  // console.log( newString )

  while(newString[start] === newString[end]) {
    if(start === end) {
      return 'Is a Palindrome'
    } else if (newString[start] === newString[end] && start !== end ) {
      start++
      end--
    } else {
      return 'Not a Palindrome'
    }
  }
  return 'Not a Palindrome'
}

isPalindrome('A man, a plan, a canal: Panama')
