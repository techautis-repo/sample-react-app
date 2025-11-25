import React, {useImperativeHandle, forwardRef, ForwardedRef} from 'react'
 
import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction9 } from './useGenericAction9' 
import { GenericAction9Params, GenericAction9Ref, ResultadoExecucaoAcao } from './interfaces'

const GenericAction9: React.ForwardRefRenderFunction<GenericAction9Ref,GenericActionProps<GenericAction9Params, ResultadoExecucaoAcao>>= (
    props: GenericActionProps<GenericAction9Params, ResultadoExecucaoAcao>, ref: ForwardedRef<GenericAction9Ref>
) =>  {

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando,
        acao
    } = useGenericAction9(props)

    useImperativeHandle(ref, () => ({        
        executarAcao(tempoExecutarAcao: number) {
            acao(tempoExecutarAcao)            
        },  
        obterResultadoAcaoAtual() {
            return resultado
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

export default forwardRef(GenericAction9)