import { useEffect, useState } from "react"; 
import { GenericActionProps } from "../base/interfaces";
import { sleep } from "../../helps"; 
import { GenericAction9Params, ResultadoExecucaoAcao } from "./interfaces";

export const useGenericAction9 = (props: GenericActionProps<GenericAction9Params, ResultadoExecucaoAcao>) => {

    const {
        dadosIniciais,
        iniciarAcao,
        sucessoAcao,
        completouAcao,
        falhaAcao
    } = props 
 
    const [resultado, setResultado] = useState<ResultadoExecucaoAcao | undefined>()

    const [status, setStatus] = useState<string>("Aguardando")

    const [executando, setExecutando] = useState<boolean>(false)
    
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

        setExecutando(true)

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

        setExecutando(false)

        completouAcao()   
    }

    useEffect(()=>{          
        console.log("Renderizou componente:"+props.dadosIniciais.iniciarExecucaoAutomaticamente) 
    })

    useEffect(()=>{         
        console.log("Montou o Componente")  
        return () => {
            console.log("Desmontou componente")
        }
    }, [])

    //incluimos esse useEffect para ser possivel 
    //acionar a acao atraves da alteracao das props do componente, 
    //criando assim uma maneira do componente pai, acionar uma acao no componente filho. 
    useEffect(()=>{         
        console.log("useEffect dadosIniciais:"+dadosIniciais.iniciarExecucaoAutomaticamente)  
 
        if(dadosIniciais.iniciarExecucaoAutomaticamente){
            acao(dadosIniciais.tempoParaExecutarAcao) 
        }    
 
    }, [dadosIniciais])

 
    function handleExecutarAcao(){
        acao(dadosIniciais.tempoParaExecutarAcao)  
    }

    return { 
        resultado,
        handleExecutarAcao,
        status,
        executando,
        acao,
    }
}