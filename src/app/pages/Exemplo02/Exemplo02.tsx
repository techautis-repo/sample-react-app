import { useExemplo02 } from './useExemplo02'
import { GenericAction2 } from '../../components/genericAction2/GenericAction2'
export function Exemplo02() {  
  const {
    genericActionParams,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    status
  } = useExemplo02()

  return (
    <div>
      <h1>Exemplo 02 - Componente pai executa acao do componente filho atraves de parametro passado nas props no componente filho</h1> 

      <GenericAction2 
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