//Atividade 1
/* 
Questão 1:Objetos são coisas do mundo real ou imaginário, que podemos de alguma 
forma identificar (ex: pedra, caneta, copo, etc). Não necessita ser real, ou existir no mundo real, 
nem ser palpável. Possui propriedades que o caracterizam, chamadas de atributos.
Classe descreve um grupo de objetos com propriedades (atributos) similares, comportamentos similares, 
relacionamentos comuns com outros objetos e uma semântica comum. Contém toda a descrição da forma do 
objeto, sendo um molde para a criação do mesmo. Por exemplo Pessoa. Cada pessoa tem um nome e uma idade; 
estes seriam os atributos comuns da classe. Ex: Sendo um carro o objeto, seus atributos são fabricante, 
cor, placa, etc, e como métodos temos ligar, acelerar, freiar...
Questão 2: 2)	Atributo é um valor de dado assumido pelos objetos de uma classe. Um método é a implementação 
de uma operação para uma classe. Ex: Sendo um carro o objetos, seus atributos são fabricante, cor, placa, etc. 
E como métodos temos ligar, acelerar, frear.
Questão 3: 
Atributo / Sistema em que é importante / Sistema em que não é importante
Peso / cadastro hospitalar / cadastro bancário
Tipo de CNH / sistema do detran / plano de saúde
Tipo sanguíneo / cadastro de doadores / operadora de telefonia
Habilidade destra / sistema de futebol / clientes de uma loja
Percentual de gordura / cadastro de uma academia / rede social
Saldo em conta / cadastro bancário / Aplicativo de paquera
Etnia / censo demográfico / sistema de rastreamento veicular
Questão 4: 
a)	Não
b)	Sim. Uma struct.
Questão 5:Aluno, notas, professores, disciplinas, turmas.
Questão 6: 
*/ 


//Questão 7:
class Retangulo {
    l1: number;
    l2: number;

    calculaArea(): number {
        return this.l1 * this.l2;
    }

    calculaPerimetro(): number {
        return this.l1 * 2 + this.l2 * 2;

    }

}

let retangulo : Retangulo;
retangulo = new Retangulo();

retangulo.l1 = 10;
retangulo.l2 = 20;

console.log(retangulo.calculaArea());
console.log(retangulo.calculaPerimetro());

//Obs: A questão solicita que se altere a classe testaRetangulo, 
//porém não foi possível identificar tal classe.



//Questão 8
class Circulo {
    raio : number;

    calculaArea(): number{
        return Math.PI * this.raio**2;
    }

    calculaPerimetro(): number{
        return 2 * Math.PI * this.raio;
    }

}

let circulo : Circulo;
circulo = new Circulo();

circulo.raio = 10;

console.log("A área do circulo é: ", circulo.calculaArea())
console.log("O perímetro do circulo é: ", circulo.calculaPerimetro())




//Questão 9
class situacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }

}

let s : situacaoFinanceira;
s = new situacaoFinanceira();

s.valorCreditos = 5000;
s.valorDebitos = 3200;

console.log("O saldo é: ", s.saldo())