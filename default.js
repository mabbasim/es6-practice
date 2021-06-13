//if parameters are not provided perfectly then one can provide default value of the parameter in a function..
function add(num1, num2 = 5){
    // if(num2 == undefined){
    //     num2 =0;
    // }
    // num2 = num2 || 0; // num2 = num2 || 5;
    return num1 + num2;
}
const total = add(10, 15);
const total2 = add(15);
console.log(total);
console.log(total2);


function createUser(name, age = 18){

const user = {};

user.name = name;

user.age = age;

return user;

}
const obj = createUser('Maya', 20);
console.log(obj);