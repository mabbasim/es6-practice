const ages = [12, 14, 16, 11];
const ages2 = [13, 17, 15,];
const ages3 = [25, 22, 28, 21, 20];
// const allAges = ages.concat(ages2).concat(30).concat(ages3);
const allAges = [...ages, ...ages2, 30, ...ages3];  //... means marging arrays
console.log(allAges);


const business = 650;
const sachib = 250;
const minister = 450;
const maximum = Math.max(business, sachib, minister);
console.log(maximum);

//for array
const takaPoisha = [650, 250, 450];
const maximum2 = Math.max(...takaPoisha);
console.log(maximum2);
