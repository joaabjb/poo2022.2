class Produto{
    private _identificador: number;
    private _descricao: string;
    private _quantEstoque: number;
    private _valUnit: number;

    constructor(ident: number, desc: string, quant: number, valor: number){
        this._identificador = ident;
        this._descricao = desc;
        this._quantEstoque = quant;
        this._valUnit = valor;
    }

    get identificador(){
        return this._identificador;
    }

    get descricao(){
        return this._descricao;
    }
    
    get quantEstoque(){
        return this._quantEstoque;
    }

    get valUnit(){
        return this._valUnit;
    }

    reporProduto(quant: number){
        this._quantEstoque += quant;
    }
    
    baixaProduto(quant: number){
        this._quantEstoque -= quant;
    }
}

class ProdutoPerecivel extends Produto{
    private _dataVal: string;

    constructor(ident: number, desc: string, quant: number, valor: number, validade: string){
        super(ident, desc, quant, valor);
        this._dataVal = validade;
    }
    
    get dataVal(){
        return this._dataVal;
    }

    estaValido(){

        let dataValidade = new Date(this._dataVal)
        let dataAtual = new Date();
        if (dataValidade >= dataAtual){
            return true;
        }
        else return false;
    }

    reporProduto(quant: number){
        if(this.estaValido()){
            super.reporProduto(quant);
        }
        else{
            console.log("Produto Vencido");
        }
        
    }
    
    baixaProduto(quant: number){
        if(this.estaValido()){
            super.baixaProduto(quant);
        }
        else{
            console.log("Produto Vencido");
        }
    }

}

class Estoque{
    private _produtos: Produto [] = [];

    inserir(p: Produto){
        if(this.consultarPeloId(p.identificador) == -1){
          if(!this.consultaPeloNome(p.descricao)){
            this._produtos.push(p);
          }
        }
        else{
            console.log("Id ou nome já existente");
        }
        
    }

    consultaPeloNome(nome: string){
        for(let i: number = 0; i < this._produtos.length; i++){
            if (this._produtos[i].descricao == nome){
                return true;
            }
            else{
                return false;
            }
        }
    }

    consultarPeloId(n: number): number {
        let indice: number = -1;
        for(let i: number = 0; i < this._produtos.length; i++){
            if(this._produtos[i].identificador == n ){
                indice = i;
                break;
            }
        }
        return indice;
    }

    excluir(n:number){
        let indice = this.consultarPeloId(n);
        if(indice == -1){
            console.log("Produto não existe");
        }
        else{
            for(let i: number = indice; i < this._produtos.length; i++){
                this._produtos[i] = this._produtos[i+1];
            }
            this._produtos.pop();
        } 
    }

    repor(id: number, quant: number){
        let i = this.consultarPeloId(id);
        if(i != -1){
            this._produtos[i].reporProduto(quant)
        }
        else{
            console.log("Produto não encontrado");
            
        }
    }

    darBaixa(id: number, quant: number){
        let i = this.consultarPeloId(id);
        if(i != -1){
            this._produtos[i].baixaProduto(quant);
        }
        else{
            console.log("Produto não encontrado");
            
        }
    }

    todosOsProdutos(){
        for(let i: number = 0; i < this._produtos.length; i++){
            console.log(`Produto ${i+1}`)
            console.log(`Identificador: ${this._produtos[i].identificador}`)
            console.log(`Nome: ${this._produtos[i].descricao}`)
            if (this._produtos[i] instanceof ProdutoPerecivel){
                console.log(`Validade: ${(<ProdutoPerecivel> this._produtos[i]).dataVal}`)
            }
            console.log("\n");
        }
    }
}

let p1: Produto = new ProdutoPerecivel(1, 'arroz', 5, 20, '2022-11-18')
let p2: Produto = new ProdutoPerecivel(2, 'feijao', 5, 5, '2023-01-14')
let p3: Produto = new ProdutoPerecivel(3, 'macarrao', 5, 4, '2023-11-17')

let e: Estoque = new Estoque();

e.inserir(p1);
e.inserir(p2);
e.inserir(p3);
e.todosOsProdutos()

//console.log(p.estaValido())