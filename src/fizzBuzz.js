export default function fizzBuzz() {
  const start = 1
  const end = 100
  let numsArray = new Array(end)

  for (let index = start; index <= end; index++) {
    if(index % 3 === 0 && index % 5 === 0) {
      numsArray[index] = ('FizzBuzz')
    } else if (index % 3 === 0 && index % 5 !== 0) {
      numsArray[index] = ('Fizz')
    } else if (index % 3 !== 0 && index % 5 === 0) {
      numsArray[index] = ('Buzz')
    } else {
      numsArray[index] = (index)
    }
  }
  return numsArray
}

fizzBuzz()
