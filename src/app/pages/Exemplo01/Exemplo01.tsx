import { useExemplo01 } from './useExemplo01'
import {GenericAction1} from '../../components/genericAction1/GenericAction1'
export function Exemplo01() {  
  const {
    cozinheiro, 
    onIniciouPreparoRefeicao, 
    onCompletouPreparoRefeicao, 
    onInterrompeuPreparoRefeicao, 
    onRefeicaoPronta,
    status
  } = useExemplo01()

  return (
    <div>
      <h1>Exemplo 01 - Acao deve ser executada ao iniciar componente. Problema UseEffect com state, sempre executa 2 vezes</h1> 
      <GenericAction1
        dadosIniciais={cozinheiro} 
        iniciarAcao={onIniciouPreparoRefeicao} 
        sucessoAcao={onRefeicaoPronta} 
        completouAcao={onCompletouPreparoRefeicao} 
        falhaAcao={onInterrompeuPreparoRefeicao}        
      />
      <div className='flex'>
        <label className='pr-2'>STATUS NO COMPONENTE PAI:</label>
        <span>{status}</span> 
      </div>  
    </div>
  )
}