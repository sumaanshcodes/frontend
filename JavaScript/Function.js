function calculation(calcfunction, num1, num2) {
    return calcfunction(num1, num2);
}       
const sum=function(num1, num2) {
    return num1 + num2;
}
const multiply=function(num1, num2) {
    return num1 * num2;
}
console.log(calculation(sum, 5, 10)); // 15
console.log(calculation(multiply, 5, 10)); // 50    