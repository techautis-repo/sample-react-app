 
export interface Pessoa{
    codg: string,
    nome: string,
    idade: number
}

export interface ConfiguracoesCozinheiro {
    tempoParaPrepararRefeicao: number 
}

export interface Cozinheiro<C extends ConfiguracoesCozinheiro, P extends Pessoa> {
    config: C,
    dadosPessoa: P,   
}

export type Refeicao = {
    nome: string 
}

export interface CozinheiroProps<C extends ConfiguracoesCozinheiro, P extends Pessoa> {
    initialValue: Cozinheiro<C,P>
    iniciouPreparoRefeicao: () => void
    refeicaoPronta: (refeicao: Refeicao) => void
    completouPreparoRefeicao: () => void
    interrompeuPreparoRefeicao: () => void
} 

export interface GenericActionProps<DI,RA> {
    dadosIniciais: DI
    iniciarAcao: () => void
    sucessoAcao: (resultadoAcao: RA) => void
    completouAcao: () => void
    falhaAcao: () => void
}

