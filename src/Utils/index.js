export const addElementsInArray = (data, elements = [{ type: 1 }], indexes = [4, 13]) => {
  const clonedArr = data.slice()
  const lastIndex = indexes.slice().pop() - 1
  let loopCount = 0;
  if (lastIndex < clonedArr.length) {
    loopCount = Math.ceil(clonedArr.length / lastIndex)
  }
  const newArr = []
  const finalArr = []
  for (let i = 0; i < loopCount; i++) {
    newArr.push(clonedArr.splice(0, lastIndex))
  }
  newArr.forEach(item => {
    finalArr.push(addEleArr(item, elements, indexes))
  })
  return finalArr.flat()
}

export const addEleArr = (data, element, indexes) => {
  const clonedArr = data.slice()
  indexes.forEach((item, index) => {
    if (item <= clonedArr.length) {
      for (let i = clonedArr.length; i > item; i--) {
        clonedArr[i] = clonedArr[i - 1]
      }
      clonedArr[item] = element[index] || element[index - 1]
    }
  })
  return clonedArr
}