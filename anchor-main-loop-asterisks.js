// Menyusun barisan bintang

var rows1 = 5;
for(var i = 0; i<rows1; i++){
    console.log('*')
}

//


// Menyusun barisan bintang dengan Nested
var rows2 = 5;
var ast = '';

for(var i = 0; i < rows2; i++){
    for (j=0; j<5 ; j++){
        ast+='*'
    }
    ast += '\n'
 }
 console.log(ast)

 

 // Menyusun Barisan tangga bintang dengan nested looping

 var rows3 = 5;
 var ast = '';

 for(var i = 0; i < rows3; i++){
     for(var j = 0; j <= i; j++){
         ast+='*'
     }
     ast += '\n'
 }
 console.log(ast)