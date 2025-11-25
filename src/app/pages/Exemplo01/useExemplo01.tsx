import { useState } from "react"; 
import { ConfiguracoesCozinheiro, Cozinheiro, Pessoa, Refeicao } from "../../components/base/interfaces";
 
export const useExemplo01 = () => { 

    const [status, setStatus] = useState<string>()

    const cozinheiro : Cozinheiro<ConfiguracoesCozinheiro,Pessoa> ={
        config: {
            tempoParaPrepararRefeicao: 1000*10
        },
        dadosPessoa: {
            codg: '001',
            nome: 'Maria',
            idade: 25
        },   
    } 

     
    function onIniciouPreparoRefeicao() {
        setStatus("onIniciouPreparoRefeicao")
        console.log("onIniciouPreparoRefeicao") 
    }

    function onRefeicaoPronta(refeicao: Refeicao) {
        setStatus("onRefeicaoPronta")
        console.log("onRefeicaoPronta") 
    }

    function onCompletouPreparoRefeicao() {
        setStatus("onCompletouPreparoRefeicao")
        console.log("onCompletouPreparoRefeicao") 
    }

    function onInterrompeuPreparoRefeicao() {
        setStatus("onInterrompeuPreparoRefeicao")
        console.log("onInterrompeuPreparoRefeicao") 
    }

    return {
        cozinheiro,
        onIniciouPreparoRefeicao,
        onRefeicaoPronta,
        onCompletouPreparoRefeicao,
        onInterrompeuPreparoRefeicao,
        status
    }
}