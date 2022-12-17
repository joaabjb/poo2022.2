class AplicacaoError extends Error{
    constructor(message: string){
        super(message)
    }
}

class IsercaoError extends AplicacaoError{
    constructor(message: string){
        super(message)
    }
}

class NumeroJaMarcadoError extends AplicacaoError{
    constructor(message: string){
        super(message)
    }
}

export {AplicacaoError, IsercaoError, NumeroJaMarcadoError }