import { useEffect, useState } from "react"; 
import { GenericActionProps } from "../base/interfaces";
import { sleep } from "../../helps"; 
import { GenericAction2Params, ResultadoExecucaoAcao } from "./interfaces";

export const useGenericAction2 = (props: GenericActionProps<GenericAction2Params, ResultadoExecucaoAcao>) => {

    const {
        dadosIniciais,
        iniciarAcao,
        sucessoAcao,
        completouAcao,
        falhaAcao
    } = props 

    //const [iniciarExecucaoAutomaticamente, setIniciarExecucaoAutomaticamente] = useState<boolean>(dadosIniciais.iniciarExecucaoAutomaticamente)
    
    const [resultado, setResultado] = useState<ResultadoExecucaoAcao | undefined>()

    const [status, setStatus] = useState<string>("Aguardando")
 
    async function executarProcessoAcao(tempoExecutarAcao: number) {
        console.log("Inicio execucao acao");
        await sleep(tempoExecutarAcao);  
        console.log("Fim execucao acao");
    }

    async function acao(tempoExecutarAcao: number) {
        setResultado(undefined)

        //Nao recomendo usar o valor de um state logo apos o setState,
        //num cenario como esse use a variavel que foi usada como parametro na funcao setState,
        //pois observei que em casos raros, pode acontecer de o estado ainda nao estar atualizado logo em seguida 
        //se o componente ainda nao tiver executado a renderizacao acionada pelo setState,
        //esse valor pode estar desatualizado quando o get for executado. 
        //Para resolver isso use o useEffect com o state no parametro, 
        // e garanta que a acao desejada só seja executada se as condicoes do contexto do projeto/situacao estejam corretos.
        //Vou mostrar isso no Exemplo04
        console.log(resultado?.nome)

        setStatus("Acao iniciada")

        iniciarAcao()
        
        await executarProcessoAcao(tempoExecutarAcao)

        const aux: ResultadoExecucaoAcao = {
            nome: Math.random().toString(20)
        }

        setResultado(resultado)

        setStatus("Refeicao Pronta")

        sucessoAcao(aux)

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

    /*useEffect(() => {     
        console.log("useEffect dadosIniciais:"+iniciarExecucaoAutomaticamente)
        if(iniciarExecucaoAutomaticamente){
            acao(dadosIniciais.tempoParaExecutarAcao) 
        }                  
    }, [iniciarExecucaoAutomaticamente])*/

    function handleExecutarAcao(){
        acao(dadosIniciais.tempoParaExecutarAcao)  
    }

    return { 
        resultado,
        handleExecutarAcao,
        status
    }
}