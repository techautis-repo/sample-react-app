import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction2 } from './useGenericAction2' 
import { GenericAction2Params, ResultadoExecucaoAcao } from './interfaces'

export const GenericAction2 = (props: GenericActionProps<GenericAction2Params, ResultadoExecucaoAcao>) =>  {  

    const {
        dadosIniciais, 
    } = props 

    const { 
        resultado,
        handleExecutarAcao,
        status, 
    } = useGenericAction2(props) 

    return (
        <div className="flex flex-column md:flex-row gap-3 p-4">
            <div className='flex flex-column'>
                {!dadosIniciais.iniciarExecucaoAutomaticamente && <div className='flex'> 
                  <Button onClick={handleExecutarAcao}>Iniciar execucao Acao</Button>
                </div> } 
                <div className='flex'>
                    <label className='pr-2'>Status:</label>
                    <span>{status}</span> 
                </div> 
                <div className='flex'>
                    <label className='pr-2'>Resultado:</label>
                    <span>{resultado?.nome}</span> 
                </div>
            </div>  
        </div>
    ) 
} 