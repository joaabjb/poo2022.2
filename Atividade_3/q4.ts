let arr: number [] = [1, 3, 5];
let frase: string = ""

arr.forEach(function(n, i){
    if (i == arr.length - 1){
        frase += n;
    }
    else{
        frase += n + "-";
    }

})
console.log(frase)
