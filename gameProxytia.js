var nama = 'zero';
var peran = '';

if (!nama && !peran) {
    console.log('Silahkan masukan nama')
}
else if(nama && !peran) {
    console.log('Halo'+nama +'Pilih peranmu untuk memulai game!')
}
else if(nama && peran === 'ksatria'){
    console.log('Selamat datang di dunia Proxyta '+nama)
    console.log('Halo ' +peran +nama +'kamu dapat menyerang dengan senjatamu')
}
else if(nama && peran === 'tabib'){
    console.log('Selamat datang di dunia Proxyta '+nama)
    console.log('Halo '+peran +nama +'kamu akan membantu temanmu yang terluka.')
}
else if(nama && peran === 'penyihir'){
    console.log('Selamat datang di dunia Proxyta '+nama)
    console.log('Halo ' +peran +nama +'kamu dapat menyerang dengan senjatamu')
}
else {
    console.log('Peran yang kamu tulis tidak tersedia')
}

