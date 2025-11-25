import React, {useImperativeHandle, forwardRef, ForwardedRef} from 'react'
 
import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction8 } from './useGenericAction8' 
import { GenericAction8Params, GenericAction8Ref, ResultadoExecucaoAcao } from './interfaces'

const GenericAction8: React.ForwardRefRenderFunction<GenericAction8Ref,GenericActionProps<GenericAction8Params, ResultadoExecucaoAcao>>= (
    props: GenericActionProps<GenericAction8Params, ResultadoExecucaoAcao>, ref: ForwardedRef<GenericAction8Ref>
) =>  {

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando,
        acao
    } = useGenericAction8(props)

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

                 <div className='flex'>
                    <label className='pr-2'>Informação adicional:</label> 
                </div> 
            </div>  
        </div>
    ) 
}

export default forwardRef(GenericAction8)