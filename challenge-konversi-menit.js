function konversiMenit(menit){
    
    var jam = Math.floor (menit / 60);
    var lebihMenit = menit % 60;

    if(lebihMenit < 10){
        return jam + ':' + '0' + lebihMenit
    }
    
    return jam + ':' + lebihMenit
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));