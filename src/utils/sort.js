// 对用户的行程进行排序
export function sort(arr) {
  let tran = []
  let days = []
  let map = {}
  let myArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i].dateTime]) {
      myArr.push({
        dateTime: arr[i].dateTime,
        data: [arr[i].attraction],
      })
      map[arr[i].dateTime] = arr[i]
    } else {
      for (let j = 0; j < myArr.length; j++) {
        if (arr[i].dateTime === myArr[j].dateTime) {
          myArr[j].data.push(arr[i].attraction)
          break
        }
      }
    }
  }
  days = myArr
  myArr.sort((a, b) => {
    return a.dateTime > b.dateTime ? 1 : -1
  })
  myArr.forEach((item) => {
    tran.push(item.data)
  })
  return {
    days: days,
    tran: tran,
  }
}
