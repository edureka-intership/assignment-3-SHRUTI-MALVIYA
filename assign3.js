orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
    };
const values = Object.values(orderData);
const sum1 = values.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
      
console.log("Total number of orders placed =",sum1);
var size = Object.keys(orderData).length;
console.log("Total number of order proportions =",size);

const total = Object.values(orderData).reduce(( acc, cur ) => acc + cur, 0);
const result = Object.keys(orderData).map((key, index)=>({
  id: index + 1,
  order: key,
  order_percentage: (100 * orderData[key] / total).toFixed(2)
}))

console.log(result);