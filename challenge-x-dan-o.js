function xo(str) {
    var jmlO = 0;   
    var jmlX = 0;   

    for (var i = 0; i< str.length; i++){
        if (str[i] === 'x'){
            jmlX+=1;
        }
        else jmlO+=1;
    }

    
    if (jmlO === jmlX){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true