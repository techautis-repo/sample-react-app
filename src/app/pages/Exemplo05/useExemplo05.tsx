import { useState } from "react"; 
import { GenericAction5Params, ResultadoExecucaoAcao } from "../../components/genericAction5/interfaces";
 
export const useExemplo05 = () => { 

    const tempoParaExecutarAcao = 5*1000

    function buildDefaultParams(): GenericAction5Params {
        return {
            iniciarExecucaoAutomaticamente: false,
            tempoParaExecutarAcao 
        } 
    }

    function buildParams(autoIniciar: boolean): GenericAction5Params {
        return {
            iniciarExecucaoAutomaticamente: autoIniciar,
            tempoParaExecutarAcao 
        } 
    }

    const [status, setStatus] = useState<string>()  
    const [desabilitar, setDesabilitar] = useState<boolean>(false)  
    const [resultadoAcao, setResultadoAcao] = useState<ResultadoExecucaoAcao|undefined>()  

    //Os parametros do componente filho foi transformado em um state no componente pai, antes era uma constante.
    //Ao clicar no botao do componente pai, atualizamos o parametro que envia o comando para iniciar a acao automaticamente
    //No componente filho existe um useEffect que executa quando as props do componente sao alterados
    const [params, setParams] = useState<GenericAction5Params>(buildDefaultParams())  
       
    function onIniciouExecucaoAcao() {
        setDesabilitar(true) 
        setStatus("onIniciouExecucaoAcao") 
        console.log("onIniciouExecucaoAcao") 
    }
 
    function onSucessoExecucaoAcao(resultado: ResultadoExecucaoAcao) {
        setResultadoAcao(resultado)
        setStatus("onSucessoExecucaoAcao")
        console.log("onSucessoExecucaoAcao:"+resultado.nome) 
    }

    function onCompletouExecucaoAcao() {
        setDesabilitar(false)
        setStatus("onCompletouExecucaoAcao")
        console.log("onCompletouExecucaoAcao") 
    }

    function onFalhaExecucaoAcao() {
        setStatus("onFalhaExecucaoAcao")
        console.log("onFalhaExecucaoAcao") 
    }

    function handleExecutarAcaoComponentePai(){
        setParams(buildParams(true))
    }

    return {
        params,
        onIniciouExecucaoAcao,
        onSucessoExecucaoAcao,
        onFalhaExecucaoAcao,
        onCompletouExecucaoAcao,
        status,
        handleExecutarAcaoComponentePai,
        desabilitar,
        resultadoAcao
    }
}