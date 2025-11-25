import { useState } from "react"; 
import { GenericAction4Params, ResultadoExecucaoAcao } from "../../components/genericAction4/interfaces";
 
export const useExemplo04 = () => { 

    const [status, setStatus] = useState<string>()  
 
    const genericActionParams : GenericAction4Params = {
        iniciarExecucaoAutomaticamente: false,
        tempoParaExecutarAcao: 10*1000
    } 
       
    function onIniciouExecucaoAcao() {
        setStatus("onIniciouExecucaoAcao")
        console.log("onIniciouExecucaoAcao") 
    }
 
    function onSucessoExecucaoAcao(resultado: ResultadoExecucaoAcao) {
        setStatus("onSucessoExecucaoAcao")
        console.log("onSucessoExecucaoAcao:"+resultado.nome) 
    }

    function onCompletouExecucaoAcao() {
        setStatus("onCompletouExecucaoAcao")
        console.log("onCompletouExecucaoAcao") 
    }

    function onFalhaExecucaoAcao() {
        setStatus("onFalhaExecucaoAcao")
        console.log("onFalhaExecucaoAcao") 
    }

    return {
        genericActionParams,
        onIniciouExecucaoAcao,
        onSucessoExecucaoAcao,
        onFalhaExecucaoAcao,
        onCompletouExecucaoAcao,
        status
    }
}