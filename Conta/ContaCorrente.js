
import { Cliente } from "./Cliente.js";

export class ContaCorrente extends conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {

        let taxa = 1.1
    
        return this._sacar(valor,taxa)
    }

}


