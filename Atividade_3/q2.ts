function primo (n : number) : boolean{
    let d = 0;
    let v = n;
    
    while(v > 0){
        if (n % v == 0){
            d++;
        }
        v--
    }

    if (d == 2){
        return true;
    }
    return false;
}

console.log(primo(37));