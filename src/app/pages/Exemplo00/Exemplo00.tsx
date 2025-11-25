import {Cozinheiro} from '../../components/cozinheiro/Cozinheiro' 
import { useExemplo00 } from './useExemplo00'

export function Exemplo00() {  
  const {
    cozinheiro, 
    onIniciouPreparoRefeicao, 
    onCompletouPreparoRefeicao, 
    onInterrompeuPreparoRefeicao, 
    onRefeicaoPronta,
    status
  } = useExemplo00()

  return (
    <div>
      <h1>Exemplo 00 - Componente Cozinheiro, Acao direta do usuario clicando no botao</h1>  
      <Cozinheiro 
        initialValue={cozinheiro} 
        iniciouPreparoRefeicao={onIniciouPreparoRefeicao} 
        refeicaoPronta={onRefeicaoPronta} 
        completouPreparoRefeicao={onCompletouPreparoRefeicao} 
        interrompeuPreparoRefeicao={onInterrompeuPreparoRefeicao} 
      />

      <div className='flex'>
        <label className='pr-2'>STATUS NO COMPONENTE PAI:</label>
        <span>{status}</span> 
      </div>  
    </div>
  )
}