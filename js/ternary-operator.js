//Ternary Operator

const user = "Guru";
// const salam = user === "Guru" ? "Selamat Datang Guru" : "Selamat Datang Siswa"; //Else
const salam = user === "Guru" ? "Selamat Datang Guru" : user === "Siswa" ? "Selamat Datang Siswa" : "Selamat Datang"; //Else if

// if(user === "Guru") {
//     salam = "Selamat Datang Guru";
// } else {
//     salam = "Selamat Datang Siswa";
// }
console.log(salam);