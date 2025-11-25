import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction5 } from './useGenericAction5' 
import { GenericAction5Params, ResultadoExecucaoAcao } from './interfaces'
 
export const GenericAction5 = (props: GenericActionProps<GenericAction5Params, ResultadoExecucaoAcao>) =>  {  

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando
    } = useGenericAction5(props) 

    return (
        <div className="flex flex-column md:flex-row gap-3 p-4">
            <div className='flex flex-column'>
                <div className='flex'> 
                  <Button disabled={executando} onClick={handleExecutarAcao}>Iniciar execucao Acao</Button>
                </div>    
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