import { useState } from "react"; 
import { GenericAction2Params, ResultadoExecucaoAcao } from "../../components/genericAction2/interfaces";
 
export const useExemplo02 = () => { 

    const [status, setStatus] = useState<string>()  

    //Neste exemplo esses parametros estao como constantes, 
    //mas na pratica esse tipo de informacao normalmente é dinamica e obtida atraves de consulta de api,
    //o que faria com que a maioria dos Devs criam
    //mais um state e um useEffect para disparar os eventos necessarios para alterar o comportamento do componente,
    //isso cria mais disparos de renderizacao/montagem componentes e por isso 
    //essa pratica cria mais complexidade no controle de fluxo dos componentes
    const genericActionParams : GenericAction2Params = {
        iniciarExecucaoAutomaticamente: false,
        tempoParaExecutarAcao: 10*1000
    } 
       
    function onIniciouExecucaoAcao() {
        setStatus("onIniciouExecucaoAcao")
        console.log("onIniciouExecucaoAcao") 
    }

    function onSucessoExecucaoAcao(resultado: ResultadoExecucaoAcao) {
        setStatus("onSucessoExecucaoAcao")
        console.log("onSucessoExecucaoAcao") 
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