/*  Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

class bank{
    private nome_Do_Cliente :string;
    private numero_Da_Conta: string;
    private cpf_Do_cliente: string;
    private saldo_Do_cliente: number;

    constructor(nome_Do_Cliente :string, numero_Da_Conta :string, cpf_Do_cliente :string, saldo_Do_cliente :number) {
        this.nome_Do_Cliente = nome_Do_Cliente;
        this.numero_Da_Conta = numero_Da_Conta;
        this.cpf_Do_cliente = cpf_Do_cliente;
        this.saldo_Do_cliente = saldo_Do_cliente;
    }

    userOutput(): void {
        console.log(`\n-----------Bem vindo, ${this.nome_Do_Cliente}! -----------`)
        console.log(`Número da conta...: ` + this.numero_Da_Conta)
        console.log("CPF cadastrado...: " + this.cpf_Do_cliente)
        console.log(`Seu saldo, ${this.nome_Do_Cliente}: [R$ ${this.saldo_Do_cliente}]`)
        console.log("-------------------------------------------")
    }
}

var cli1: bank = new bank("Douglas", "223C45", "999.999.999-99", 200);
cli1.userOutput();