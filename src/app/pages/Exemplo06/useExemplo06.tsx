import { useRef, useState } from "react"; 
import { GenericAction6Params, ResultadoExecucaoAcao } from "../../components/genericAction6/interfaces";
import { GenericAction6Ref } from "../../components/genericAction6/interfaces";
 
export const useExemplo06 = () => { 
    const genericActionRef = useRef<GenericAction6Ref>(null)

    const tempoParaExecutarAcao = 5*1000

    function buildDefaultParams(): GenericAction6Params {
        return {
            iniciarExecucaoAutomaticamente: false,
            tempoParaExecutarAcao 
        } 
    } 

    const params = buildDefaultParams()
    const [status, setStatus] = useState<string>()  
    const [desabilitar, setDesabilitar] = useState<boolean>(false)  
    const [resultadoAcao, setResultadoAcao] = useState<ResultadoExecucaoAcao|undefined>()  

      
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
        genericActionRef.current?.executarAcao(tempoParaExecutarAcao)
    }

    return {
        genericActionRef,
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