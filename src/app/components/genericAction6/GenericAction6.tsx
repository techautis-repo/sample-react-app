import React, {useImperativeHandle, forwardRef, ForwardedRef} from 'react'
 
import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction6 } from './useGenericAction6' 
import { GenericAction6Params, GenericAction6Ref, ResultadoExecucaoAcao } from './interfaces'

const GenericAction6: React.ForwardRefRenderFunction<GenericAction6Ref,GenericActionProps<GenericAction6Params, ResultadoExecucaoAcao>>= (
    props: GenericActionProps<GenericAction6Params, ResultadoExecucaoAcao>, ref: ForwardedRef<GenericAction6Ref>
) =>  {

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando,
        acao
    } = useGenericAction6(props)

    useImperativeHandle(ref, () => ({        
        executarAcao(tempoExecutarAcao: number) {
            acao(tempoExecutarAcao)            
        }  
    })) 

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

export default forwardRef(GenericAction6)