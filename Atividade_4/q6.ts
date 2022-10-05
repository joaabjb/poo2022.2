class Triangulo{
    a: number;
    b: number;
    c: number;

    constructor (l1: number, l2: number, l3: number){
        this.a = l1;
        this.b = l2;
        this.c = l3;
    }

    ehTriangulo(): boolean {
        if ((Math.abs(this.b - this.c) < this.a) && (this.a < (this.b + this.c))) return true;
        return false;
    }
    ehEquilatero(): boolean {
        if(this.ehTriangulo() && (this.a == this.b) && (this.a == this.c)) return true;
        return false;
    }
    ehEscaleno(): boolean {
        if(this.ehTriangulo() && (this.a != this.b) && (this.a != this.c) && (this.b != this.c)) return true;
        return false;
    }
    ehIsoceles(): boolean {
        if(this.ehTriangulo() && !this.ehEquilatero() && !this.ehEscaleno()) return true;
        return false;
    }
}

let teq = new Triangulo(3, 3, 3);
let tis = new Triangulo(3, 3, 1);
let tes = new Triangulo(5, 4, 6);

console.log(teq.ehTriangulo());
console.log(teq.ehEquilatero());
console.log(teq.ehIsoceles());
console.log(teq.ehEscaleno());