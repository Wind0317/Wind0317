// 8. 在第4题的基础上面做一次扩展，如果结束隔离的时间是星期六或星期天，则顺延到星期一

function getIsolationDate(date) {
  // TODO
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 14);
  if (newDate.getDay() === 6) {
    newDate.setDate(newDate.getDate() + 2);
  } else if (newDate.getDay() === 0) {
    newDate.setDate(newDate.getDate() + 1);
  }
  return newDate.getFullYear() + '年' + (newDate.getMonth() + 1) + '月' + newDate.getDate() + '日';
}

console.log(getIsolationDate('2022-08-20'));