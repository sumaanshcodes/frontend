console.log(2>1);  // greater than
console.log(2<1);  // less than
console.log(2>=2);  // greater than equal to
console.log(2<=1);  // less than equal to
console.log(2==1);  // equal to
console.log(2!=1);  // not equal to

console.log(2==="2");  // strict equal to
console.log(2!=="2");  // strict not equal to

console.log("2">1);  // true, because "2" is converted to number 2
console.log("02">2);  // true, because "02" is converted to number 2

console.log(null>0);  // false, null is converted to 0
console.log(null>=0);  // true, null is converted to 0
console.log(null==0);  // false, null is not converted to 0

