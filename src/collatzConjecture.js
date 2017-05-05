var newArr = []

export default function collatzConjecture(number) {
  if(number === 1) {
    newArr.push(number)
    let resultsArray = newArr
    newArr =[]
    return resultsArray
  }
  if(number % 2 === 0) {
    newArr.push(number)
    return collatzConjecture(number/2)
  }
  if(number % 2 !== 0) {
    newArr.push(number)
    return collatzConjecture((number*3)+1)
  }

}
