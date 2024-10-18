const add=(a , b)=> a+b
const sub=(a , b)=> a-b
const mul=(a , b)=> a*b
const div=(a , b)=> a/b


console.log("Add "+add(1,2));
console.log("sub "+sub(1,2));
console.log("mul "+mul(1,2));
console.log("div "+div(1,2));



let arr = [1,2,3,4,5];     

let newarr = arr.map((num) => num*num);
console.log(newarr);