// object destructure........
const person = {name: 'Maya', age: 22, phone: 0178810283, address: 'Sylhet', salary: 50000};
// const personName = person.name;
// console.log(personName);

const {name, salary, phone} = person;
console.log(name, phone);

const complexObject = {
    name: 'abc',
    info: {
        address: 'Sylhet',
        leader: 'Neta'
    }
}
const {leader} = complexObject.info;
console.log(leader);


// array destructure.........
const friends = ['Aayaan', 'Zaaid', 'Yaaqub', 'Mina', 'Lila'];
const [ayan, zaid, ...restFriends] = friends;
console.log(zaid);
console.log(restFriends);