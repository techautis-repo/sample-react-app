import { useExemplo03 } from './useExemplo03'
import { GenericAction3 }  from '../../components/genericAction3/GenericAction3'

export function Exemplo03() {  
  const {
    genericActionParams,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    status
  } = useExemplo03()

  return (
    <div>
      <h1>Exemplo 03 - Inclui controle de status do processo para nao executar 2 vezes. 
        Nao bloqueia botao e o usuario consegue clicar 2x no botao e acionar o evento simultaneamente </h1> 
      <GenericAction3 
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