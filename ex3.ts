/*Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

//strictPro coloca false

class paciente {
    private idade: number;
    private nome: string;
    private cpf: string;
    private data_Nascimento: string;
    private doenca: boolean;

    constructor(idade: number, nome: string, cpf: string, data_Nascimento: string, doenca: boolean){
        this.idade = idade;
        this.nome = nome;
        this.cpf = cpf;
        this.data_Nascimento = data_Nascimento;
        this.doenca = doenca;
    }

    informacoes_do_Ususario():void{
        console.log("\nInformações do Paciente\n" + "\nIdade...: " + this.idade + "\nNome do usuario: " + this.nome + "\nCpf...: " + this.cpf + "\nData de Nacimento: " + this.data_Nascimento  + "\nPaciente está doente?" + "\nAtenção! Se a mensagem constar `True`, o paciente esta atestando positivo a doença." + `\n[${this.doenca}]`);
        if (this.doenca === true) {
            console.log("O paciente se encontra doente.\n");
        } else {
            console.log("O paciente  não se encontra doente.\n");
        }

    }
}

var usaurio1: paciente = new paciente(24, "Douglas", "999.999.999.99", "20/01/1998", true);
var usaurio2: paciente = new paciente(25, "Ronaldo", "888.888.888-88", "17/03/1997", false);
var usaurio3: paciente = new paciente(22, "Bardock", "777.777.777-77", "10/02/2000", true);
var usaurio4: paciente = new paciente(21, "Daniel", "666.666.666-66", "21/02/2001", true);
usaurio1.informacoes_do_Ususario();
usaurio2.informacoes_do_Ususario();
usaurio3.informacoes_do_Ususario();
usaurio4.informacoes_do_Ususario();