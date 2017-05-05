const topArr = [1,2,3,4]
const mainArr = [2,4,6,8]

export default function setComplement(arr1,arr2) {
  let result = arr2.filter((item) => {
    return arr1.indexOf(item) === -1
  })
  return result
}

setComplement(topArr,mainArr)
