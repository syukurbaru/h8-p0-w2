// Looping menggunakan while

console.log('LOOPING PERTAMA WHILE')

var angka = 2;
while(angka <= 20){
    console.log(angka +' - I love coding');
    angka+=2;
}

console.log('LOOPING KEDUA WHILE')
var angka = 20;
while(angka >= 2){
    console.log(angka +' - I will become fullstack developer');
    angka-=2;
}

// Looping menggunakan for
console.log('LOOPING PERTAMA FOR')

for(var nilai = 1; nilai<=20; nilai++){
    console.log(nilai + ' - I love coding');
}

console.log('LOOPING KEDUA FOR')
for (var nilai2 = 20; nilai2 >= 1; nilai2--){
    console.log(nilai2 + ' - I will become fullstack developer')
}

// Angka ganjil genap
console.log('ANGKA GANJIL GENAP')

for (var i=1; i<=100; i++){
    if (i%2 == 1){
        console.log('Ganjil');
    }
    else { console.log('Genap');
    }
}



// contoh - untuk pertambahan counter 2
for (var a=1; a<=100; a+=2){
    if (a % 3 == 0){
        console.log(a +' KELIPATAN 3')
    }
    else {
        console.log(a)
    }
}



// contoh - untuk pertambahan counter 5
for (var b=1; b<=100; b+=5){
    if (b % 6 == 0){
        console.log(b +' KELIPATAN 6')
    }
    else {
        console.log(b)
    }
}


// contoh - untuk pertambahan counter 9

for (var b=1; b<=100; b+=9){
    if (b % 10 == 0){
        console.log(b +' KELIPATAN 10')
    }
    else {
        console.log(b)
    }
}

