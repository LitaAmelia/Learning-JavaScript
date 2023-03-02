//Rest Parameter (...array)

function kumpulanData(a, b, ...sisa) {
    console.log(a);
    console.log(b);
    console.log(sisa);
}

kumpulanData(1,2,3,4,5);