export class SistemaAutenticacao{
    static login(autenticavel,senha){
        if(SistemaAutenticacao.ehAtutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    static ehAtutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}