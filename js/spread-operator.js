//Spread Operator
// const arrayA = [6,5, 4, 3, 2, 1];
// const arrayB = [9, 8, 7, ...arrayA];
// console.log(arrayB);

const objectA = {
    nama: 'Lita',
    umur: 22
};

const objectB = {
    ...objectA,
    alamat: 'Bandar Lampung'
};

console.log(objectB)