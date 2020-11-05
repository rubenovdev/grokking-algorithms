'use strict'

/*
  # Функция binarySearch получает отсортированный массив и значение,
  # если значение присутствует в массиве, то функция возвращает его позицию
*/

function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (item === guess) {
      return mid
    }

    if (item > guess) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return null
}

const myList = [1, 3, 5, 7, 9]

console.log(binarySearch(myList, 3)) // 1
console.log(binarySearch(myList, -1)) // null
