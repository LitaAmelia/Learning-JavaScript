//Perbedaan variable var & (Let & const)
function scope(){
    var a = "Ini nilai var";
    let b = "Ini nilai let";
    const c = "Ini nilai const";
    console.log(a, b, c)
}

/**Terdapat function scope dan block scope
 * Jika variable diakses di luar function, maka tidak bisa diakses
 */

//Block Scope
if (true) {
    var a = "Ini nilai var";
    // let b = "Ini nilai let";
    // const c = "Ini nilai const";
}
console.log(a);

//Perbedaan variable let & const
let a = "Nilai awal";
a = "Nilai setelah diubah";

console.log(a);