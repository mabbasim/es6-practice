// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(6);
// console.log(result);

// const doubleIt = function(num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(8);
// console.log(result);

//single line function......
const doubleIt = (num) => num * 2; //es6 arro function
const result = doubleIt(50);
console.log(result);

const add = (x, y) => x + y;
const sum = add(10, 20);
console.log(sum);

const give5 = () => 5;
const result2 = give5();
console.log(result2);

//multiline function.....

const doMath = (x, y) => {
    const multiply = x * y ;
    const total = multiply + 100;
    return total;
}

const displayMulti = doMath(2, 3);
console.log(displayMulti);