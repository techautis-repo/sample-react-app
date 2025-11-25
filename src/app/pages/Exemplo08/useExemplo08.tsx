import { useRef, useState } from "react"; 
import { GenericAction7Params, ResultadoExecucaoAcao } from "../../components/genericAction7/interfaces";
import { GenericAction7Ref } from "../../components/genericAction7/interfaces";
 
export const useExemplo08 = () => { 
    const genericActionRef = useRef<GenericAction7Ref>(null)

    const tempoParaExecutarAcao = 5*1000

    function buildDefaultParams(): GenericAction7Params {
        return {
            iniciarExecucaoAutomaticamente: false,
            tempoParaExecutarAcao 
        } 
    } 

    const params = buildDefaultParams()
    const [status, setStatus] = useState<string>()  
    const [desabilitar, setDesabilitar] = useState<boolean>(false)  
    const [infoBaseadaNoResultadoAcaoNaFuncaoSucesso, setInfoBaseadaNoResultadoAcaoNaFuncaoSucesso] = useState<string>()  
    const [infoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho, setInfoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho] = useState<string>()  
 
    function onIniciouExecucaoAcao() {
        setDesabilitar(true) 
        setStatus("onIniciouExecucaoAcao") 
        console.log("onIniciouExecucaoAcao") 
    }
 
    function onSucessoExecucaoAcao(resultado: ResultadoExecucaoAcao) {
        setInfoBaseadaNoResultadoAcaoNaFuncaoSucesso("INFO OBTIDA NA FUNCAO onSucessoExecucaoAcao: "+resultado.nome)
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

    function handleObterResultadoAtual(){
        const resultado = genericActionRef.current?.obterResultadoAcaoAtual()
        setInfoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho("INFO OBTIDA PELA REFERENCIA DO COMPONENTE: "+resultado?.nome)
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
        handleObterResultadoAtual,
        desabilitar,
        infoBaseadaNoResultadoAcaoNaFuncaoSucesso,
        infoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho
    }
}