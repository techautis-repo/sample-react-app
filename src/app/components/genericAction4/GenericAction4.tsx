import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction4 } from './useGenericAction4' 
import { GenericAction4Params, ResultadoExecucaoAcao } from './interfaces'


export const GenericAction4 = (props: GenericActionProps<GenericAction4Params, ResultadoExecucaoAcao>) =>  {  

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando
    } = useGenericAction4(props) 

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