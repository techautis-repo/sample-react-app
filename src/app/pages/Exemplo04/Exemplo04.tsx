import { GenericAction4 }  from '../../components/genericAction4/GenericAction4'
import { useExemplo04 } from './useExemplo04'

export function Exemplo04() {  
  const {
    genericActionParams,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    status
  } = useExemplo04()

  return (
    <div>
      <h1>Exemplo 05 - Inclui bloqueio do botao para resolver o problema do exemplo anterior</h1> 

      <GenericAction4 
        dadosIniciais={genericActionParams}  
        iniciarAcao={onIniciouExecucaoAcao}
        sucessoAcao={onSucessoExecucaoAcao}
        completouAcao={onCompletouExecucaoAcao}
        falhaAcao={onFalhaExecucaoAcao}/>

      <div className='flex'>
        <label className='pr-2'>STATUS NO COMPONENTE PAI:</label>
        <span>{status}</span> 
      </div>  
      
    </div>
  )
}