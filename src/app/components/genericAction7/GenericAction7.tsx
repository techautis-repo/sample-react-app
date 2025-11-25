import React, {useImperativeHandle, forwardRef, ForwardedRef} from 'react'
 
import { GenericActionProps } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useGenericAction7 } from './useGenericAction7' 
import { GenericAction7Params, GenericAction7Ref, ResultadoExecucaoAcao } from './interfaces'

const GenericAction7: React.ForwardRefRenderFunction<GenericAction7Ref,GenericActionProps<GenericAction7Params, ResultadoExecucaoAcao>>= (
    props: GenericActionProps<GenericAction7Params, ResultadoExecucaoAcao>, ref: ForwardedRef<GenericAction7Ref>
) =>  {

    const { 
        resultado,
        handleExecutarAcao,
        status, 
        executando,
        acao
    } = useGenericAction7(props)

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

export default forwardRef(GenericAction7)