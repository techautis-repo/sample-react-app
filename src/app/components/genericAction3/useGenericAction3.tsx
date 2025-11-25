import { useEffect, useState } from "react"; 
import { GenericActionProps } from "../base/interfaces";
import { sleep } from "../../helps"; 
import { GenericAction3Params, ResultadoExecucaoAcao } from "./interfaces";

export const useGenericAction3 = (props: GenericActionProps<GenericAction3Params, ResultadoExecucaoAcao>) => {

    const {
        dadosIniciais,
        iniciarAcao,
        sucessoAcao,
        completouAcao,
        falhaAcao
    } = props 
 
    const [resultado, setResultado] = useState<ResultadoExecucaoAcao | undefined>()

    const [status, setStatus] = useState<string>("Aguardando")
    
    let executando = false
 
    async function executarProcessoAcao(tempoExecutarAcao: number) {
        console.log("Inicio execucao acao");
        await sleep(tempoExecutarAcao);  
        console.log("Fim execucao acao"); 
    }

    async function acao(tempoExecutarAcao: number) {
        if(executando){
            console.log("Ja existe uma solicitacao de execucao da acao em andamento")
            return
        }

        executando = true

        setResultado(undefined)

        setStatus("Acao iniciada")

        iniciarAcao()
        
        await executarProcessoAcao(tempoExecutarAcao) 

        const resultado: ResultadoExecucaoAcao = {
            nome: Math.random().toString(20)
        }

        setResultado(resultado)

        setStatus("Refeicao Pronta")

        sucessoAcao(resultado)

        executando = false

        completouAcao()   
    }

    useEffect(()=>{          
        console.log("Renderizou componente") 
    })

    useEffect(()=>{         
        console.log("Montou o Componente")  

        console.log("useEffect dadosIniciais:"+dadosIniciais.iniciarExecucaoAutomaticamente)
        if(dadosIniciais.iniciarExecucaoAutomaticamente){
            acao(dadosIniciais.tempoParaExecutarAcao) 
        }   

        return () => {
            console.log("Desmontou componente")
        }
    }, [])
 
    function handleExecutarAcao(){
        acao(dadosIniciais.tempoParaExecutarAcao)  
    }

    return { 
        resultado,
        handleExecutarAcao,
        status,
        executando
    }
}