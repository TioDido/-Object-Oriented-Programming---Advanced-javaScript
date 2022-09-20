/*Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

class Patinete {
    private modelo: string;
    private cor: string;
    private numero_De_Rodas: number;

    constructor(modelo: string, cor: string, numero_De_Rodas: number) {
        this.modelo = modelo;
        this.cor = cor;
        this.numero_De_Rodas = numero_De_Rodas;
    }

    systemOutput():void{
        console.log(`Modelo...: ${this.modelo}`)
        console.log(`Cor...: ${this.cor}`);
        console.log(`Numero de rodas...: ${this.numero_De_Rodas}\n`)
    }
}
var skate1: Patinete = new Patinete("Boladao", "Verde", 3);
var skate2: Patinete = new Patinete("Rapidaoo", "Azul", 13);
var skate3: Patinete = new Patinete("Esse avoa", "Muito Bolada", 36);
skate1.systemOutput();
skate2.systemOutput();
skate3.systemOutput();

