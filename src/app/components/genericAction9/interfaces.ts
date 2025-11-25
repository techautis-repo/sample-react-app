export type ResultadoExecucaoAcao = {
    nome: string 
}

export interface GenericAction9Params {
    iniciarExecucaoAutomaticamente: boolean,
    tempoParaExecutarAcao: number, 
} 

export interface GenericAction9Ref {
    executarAcao(tempoExecutarAcao: number): void 
    //Nao necessariamente precisa ser uma funcao para expor o acesso ao ResultadoExecucaoAcao
    //Particularmente prefiro expor atraves de funcao
    obterResultadoAcaoAtual(): ResultadoExecucaoAcao | undefined
}