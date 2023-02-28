//String Interpolation

/**Perbedaan tanda petik dengan bactick */

//Menggunakan petik
const waktu = "Pagi";
const salam = "Selamat" + waktu;

console.log(salam)

//Menggunakan backtick (String Interpolation)
const time = "Siang";
// const hello = `Selamat ${time}`;
const hello = `Selamat ${2 + 2}`;

console.log(hello);
