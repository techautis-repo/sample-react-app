import { useEffect, useState } from "react"; 
import { ConfiguracoesCozinheiro, Cozinheiro, GenericActionProps, Pessoa, Refeicao } from "../base/interfaces";
import { sleep } from "../../helps"; 

export const useGenericAction1 = (props: GenericActionProps<Cozinheiro<ConfiguracoesCozinheiro,Pessoa>, Refeicao>) => {

    const {
        dadosIniciais,
        iniciarAcao,
        sucessoAcao,
        completouAcao,
        falhaAcao
    } = props 

    const [value, setValue] = useState<Cozinheiro<ConfiguracoesCozinheiro,Pessoa>>(dadosIniciais)
    const [refeicao, setRefeicao] = useState<Refeicao | undefined>()
    const [status, setStatus] = useState<string>("Aguardando pedido")
 
    async function executarProcesso(tempoParaPrepararRefeicao: number) {
        console.log("Inicio execucao");
        await sleep(tempoParaPrepararRefeicao); 
        console.log("Fim execucao");
    }

    async function prepararRefeicao(tempoParaPrepararRefeicao: number) {
        setRefeicao(undefined)
        setStatus("Preparo iniciado")
        iniciarAcao()
        
        await executarProcesso(tempoParaPrepararRefeicao)

        const refeicao: Refeicao = {
            nome: "Pudim"
        }

        setRefeicao(refeicao)
        setStatus("Refeicao Pronta")
        sucessoAcao(refeicao)
        completouAcao()  
    }

    useEffect(()=>{          
        console.log("Renderizou componente") 
    })

    useEffect(()=>{         
        console.log("Montou o Componente") 
        return () => {
            console.log("Desmontou componente")
        }
    }, [])

    useEffect(() => {     
        console.log("useEffect dadosIniciais:"+value)
        prepararRefeicao(value.config.tempoParaPrepararRefeicao)           
    }, [value])

    return {
        value,
        refeicao,
        prepararRefeicao,
        status
    }
}