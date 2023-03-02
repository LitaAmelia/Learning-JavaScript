//Promise

// console.log('kode 1');
// setTimeout(() => console.log('kode 2'), 2000);
// console.log('kode 3');

const orderBarang = async() => {
    try {
        const checkout = await new Promise((resolve, reject)=>{
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
        console.log('Kode dijalankan ketika resolve')
        console.log(checkout);
    } catch (error) {
        console.log(error)
    }
}

console.log('kode Dimulai');
orderBarang();
console.log('kode Selesai');