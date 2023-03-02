//Promise

// console.log('kode 1');
// setTimeout(() => console.log('kode 2'), 2000);
// console.log('kode 3');

const checkout = new Promise((resolve, reject)=>{
    const stokBarang = 50;
    const order = 60;
    if (order < stokBarang) {
        setTimeout(()=> {
            resolve("Barang diorder");
        }, 1000);
    } else {
        setTimeout(()=> {
            reject("Stock tidak mencukupi");
        }, 1000);
    }
});

console.log('kode Dimulai');
checkout.then((res)=> console.log(res)).catch((err)=> console.log(err))
console.log('kode Selesai');