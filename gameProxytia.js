var nama = prompt('Siapa nama kamu (mikael, nina, danu atau zero?');
var peran = prompt('Apa peranmu? ksatria, tabib atau penyihir?');

if(nama ==='' && peran === ''){
    alert('Nama harus diisi!')
}

//rule mikael
if(nama === 'mikael' && peran === ''){
    alert('Halo' + ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game!' );
}

if(nama === 'mikael' && peran === 'ksatria'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu dapat menyerang dengan senjatamu' );
    
}
else if(nama === 'mikael' && peran==='tabib'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu akan membantu temanmu yang terluka' );
}
else if (nama === 'mikael' && peran==='penyihir'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenangan' );
}

//rule nina
if(nama === 'nina' && peran === ''){
    alert('Halo' + ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game!' );
}

if(nama === 'nina' && peran === 'ksatria'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu dapat menyerang dengan senjatamu' );
    
}
else if(nama === 'nina' && peran==='tabib'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu akan membantu temanmu yang terluka' );
}
else if (nama === 'nina' && peran==='penyihir'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenangan' );
}

//rule danu
if(nama === 'danu' && peran === ''){
    alert('Halo' + ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game!' );
}

if(nama === 'danu' && peran === 'ksatria'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu dapat menyerang dengan senjatamu' );
    
}
else if(nama === 'danu' && peran==='tabib'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu akan membantu temanmu yang terluka' );
}
else if (nama === 'danu' && peran==='penyihir'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenangan' );
}

//rule zero
if(nama === 'zero' && peran === ''){
    alert('Halo' + ' ' + nama + ' ' + 'Pilih peranmu untuk memulai game!' );
}

if(nama === 'zero' && peran === 'ksatria'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu dapat menyerang dengan senjatamu' );
    
}
else if(nama === 'zero' && peran==='tabib'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'Kamu akan membantu temanmu yang terluka' );
}
else if (nama === 'zero' && peran==='penyihir'){
    alert('Selamat datang di Dunia Proxytia' + ' ' + nama + '\n' + ' ' + 'Halo' + ' ' + peran + ' ' + nama + ', ' + 'ciptakan keajaiban yang membantu kemenangan' );
}
