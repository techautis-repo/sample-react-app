export type ResultadoExecucaoAcao = {
    nome: string 
}

export interface GenericAction6Params {
    iniciarExecucaoAutomaticamente: boolean,
    tempoParaExecutarAcao: number, 
} 

export interface GenericAction6Ref {
    executarAcao(tempoExecutarAcao: number): void 
}