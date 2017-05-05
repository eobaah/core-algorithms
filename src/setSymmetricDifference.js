const arr1 = [1,2,3,4]
const arr2 = [2,4,6,8]

export default function setSymmetricDifference(arr1, arr2) {
  let combined = arr1.concat(arr2)
  let newA = combined.filter( function(elem, index, combined) {
    return combined.indexOf(elem) !== index
  })
  let symDiff = combined.filter( function(elem) {
    return newA.indexOf(elem) === -1
  })
  return symDiff
}

setSymmetricDifference(arr1, arr2)
