// No.1 
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    };   
}

// No. 2 ||i = 1-5, kelipatan 5 -> fizz, 3 -> buzz, kalau kelipatan 5 & 3 -> fizz buzz
for (let i = 1; i <= 50 ; i++) {
    let numbers = '';
    if (i%5 == 0 && i%3 == 0) {
        numbers += 'fizz buzz';
    }else if(i%3 == 0){
        numbers += 'buzz';
    }else if (i%5 == 0){
        numbers += 'fizz'
    }
    else {
        numbers += i;
    }
    console.log(numbers);
}

// No. 3 || Membuat segitiga dengan input adalah tinggi segitiganya.
function createTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let triangle = '';
        for (let j = 1; j <= i; j++){
            triangle += '* ';
        }
        console.log(triangle);
    }
}

console.log(createTriangle(5));