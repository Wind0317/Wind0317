/**
 *  
 * 7. 现有一人从外地回小区，根据相关政策规定需要进行《新冠疫情医学隔离》，隔离时间是14天，它回来
   的日期是 2022年8月18日 ，请计算一下他什么时间可以解除隔离？【输出的日期格式必须是xxxx年xx
    月xx日】
 * 
 */
function getIsolationDate(date) {
  // TODO
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 14);
  return newDate.getFullYear() + '年' + (newDate.getMonth() + 1) + '月' + newDate.getDate() + '日';
}

console.log(getIsolationDate('2022-08-18'));
