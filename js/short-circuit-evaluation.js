//Short circuit evaluation
//&& atau ||

//akan true jika keduanya true
// const perbandingan = true && true;
// const perbandingan = true && false && "String";

//akan bernilai true jika salah satunya true
// const perbandingan = false || true;
// const perbandingan = false || false || "String" || true;

const auth = true;

const page = auth || "Login page";

console.log(page);