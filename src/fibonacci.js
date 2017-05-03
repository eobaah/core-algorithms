export default function fibonacci(number) {
  let fibArray = new Array(number)
  for(let index = 0; index <= number; index++) {
    if(index < 2){
      fibArray[index] = index
    } else {
      fibArray[index] = fibArray[index-1] + fibArray[index-2]
    }
  }
  return fibArray
}
