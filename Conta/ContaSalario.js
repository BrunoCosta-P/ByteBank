import {Conta} from "./Conta"

export class ContaSalario extends Conta{
    constructor (cleinte){
        super(0,cliente, 100)
    }

    sacar(valor){
        const taxa = 1.01
        return this._sacar(valor,taxa)
    }
}