//Array and Object Destructuring
const myArray = ['Kevin', 'Jakarta', 'SMK'];
const myObject = {nama: 'Kevin', alamat: 'Jakarta', pendidikan: 'SMK'};

// const nama = myArray[0];
// const alamat = myObject.alamat;

// const [nama, alamat] = myArray;
// const [,alamat] = myArray;

const {pendidikan: pend, alamat: address} = myObject;

console.log(pend, address);