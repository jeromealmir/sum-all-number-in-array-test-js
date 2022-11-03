
function helper(array) {
  for (const item of array) {
    return item
  }
}

function sumItems(array) {
  let total = 0;
  for (let item of array) {
    if(Array.isArray(item)){
      total += sumItems(item)
    } else {
      total += item;
    }
  }
  return total;
}
console.log(sumItems([1, 2, 3, [4], 5]))
module.exports = sumItems;