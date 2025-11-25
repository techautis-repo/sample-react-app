import { useState } from "react"; 
import { GenericAction3Params, ResultadoExecucaoAcao } from "../../components/genericAction3/interfaces";
 
export const useExemplo03 = () => { 

    const [status, setStatus] = useState<string>()  
 
    const genericActionParams : GenericAction3Params = {
        iniciarExecucaoAutomaticamente: false,
        tempoParaExecutarAcao: 10*1000
    } 
       
    function onIniciouExecucaoAcao() {
        setStatus("onIniciouExecucaoAcao")
        console.log("onIniciouExecucaoAcao") 
    }

    //Imagine se ao receber esse resultado vc precisasse executar alguma acao que dependa 
    //necessariamente do resultado dessa acao e que, 
    //esse valor diferente no resultado da acao interfira diretamente no objetivo do processo/sistema/contexto
    //COMENTARIO EXTRA, QUE NAO TEM A VER DIRETAMENTE COM O ASSUNTO DO MOMENTO, 
    //PENSAR SE DEVO FALAR DISSO PARA NAO CONFUNDIR A NECESSIDADE DA CRIACAO DAS SOLUCOES APRESENTADAS: 
    //Por situacoes como essas é que existem recomendacoes para que regras de negocio 
    //sejam centralizadas numa camada especifica de codigo, 
    // para que problemas assim sejam identificados e tratados igualmente
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