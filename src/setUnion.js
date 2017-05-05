const topArr = [1,2,3,4]
const mainArr = [2,4,6,8]

export default function setUnion(topArr, mainArr) {
  let combinedArr = mainArr.concat(topArr)
  var uniqueProducts = combinedArr.filter( function(elem, index, combinedArr) {
    return combinedArr.indexOf(elem) === index
  })
  return uniqueProducts
}

setUnion(topArr, mainArr)
