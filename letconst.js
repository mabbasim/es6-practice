const name = "Maya";
// name = "Mim"; // will get error
console.log(name);

const friends = ['Maya', 'Nitu'];
friends[1] = 'Nilima';
friends.push('Faria');
// friends = [20, 22]; // will get error
console.log(friends);

const friendsDetail = {name: 'Rafa', age: 22};
console.log(friendsDetail.name = 'mim');

//for changing value...
let patientName = 'Maya Rahman';
patientName = 'Nitu Khan';
console.log(patientName);

//let is called scope variable
let sum = 0;
for(let i = 0; i < 10 ; i++){
    sum = sum + i;
}
console.log(sum);

