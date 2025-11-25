import { useState } from "react"; 
import { ConfiguracoesCozinheiro, Cozinheiro, CozinheiroProps, Pessoa, Refeicao } from "../base/interfaces";
import { sleep } from "../../helps";

export const useCozinheiro = (props: CozinheiroProps<ConfiguracoesCozinheiro, Pessoa>) => {

    const {
        initialValue,
        iniciouPreparoRefeicao,
        refeicaoPronta,
        completouPreparoRefeicao,
        interrompeuPreparoRefeicao,
    } = props

    const [value, setValue] = useState<Cozinheiro<ConfiguracoesCozinheiro,Pessoa>>(initialValue)
    const [refeicao, setRefeicao] = useState<Refeicao | undefined>()
    const [status, setStatus] = useState<string>("Aguardando pedido")
 
    async function executaProcessoPreparoRefeicao() {
        console.log("Inicio execucao preparo refeicao");
        await sleep(value.config.tempoParaPrepararRefeicao); 
        console.log("Fim execucao preparo refeicao");
    }

    async function prepararRefeicao() {
        setRefeicao(undefined)
        setStatus("Preparo iniciado")
        iniciouPreparoRefeicao()
        
        await executaProcessoPreparoRefeicao()

        const refeicao: Refeicao = {
            nome: "Pudim"
        }

        setRefeicao(refeicao)
        setStatus("Refeicao Pronta")
        refeicaoPronta(refeicao)
        completouPreparoRefeicao()  
    }

    return {
        value,
        refeicao,
        prepararRefeicao,
        status
    }
}