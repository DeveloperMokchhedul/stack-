

// sum digit of number 

function sumdigitofnumber (n){
    let sum = 0;
   

    while(n>0){
        sum +=n%10
        n = Math.floor(n/10)
    }
    return sum

}

console.log(sumdigitofnumber(123));
