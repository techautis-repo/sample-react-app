import { useExemplo06 } from './useExemplo06'
import GenericAction6 from '../../components/genericAction6/GenericAction6'
import { Button } from 'primereact/button'

export function Exemplo06() {  
  const {
    genericActionRef,
    params,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    handleExecutarAcaoComponentePai,
    status,
    desabilitar,
    resultadoAcao
  } = useExemplo06()

  return (
    <div>
      <h4>Exemplo 06</h4>  
      <h4>PROBLEMA ANTERIOR: Ter que trocar o cadarco do tenis sempre que for calcá-lo</h4> 
      <h4>SOLUCAO:</h4> 
      <h4>- Configurar o componente filho para expor sua referencia</h4>
      <h4>- Incluir essa referencia no componente pai</h4> 
      <h4>- Acionar a funcao do componente filho atraves de sua referencia, ao clicar no botao do componente pai</h4> 

      <GenericAction6 
        ref={genericActionRef}
        dadosIniciais={params}  
        iniciarAcao={onIniciouExecucaoAcao}
        sucessoAcao={onSucessoExecucaoAcao}
        completouAcao={onCompletouExecucaoAcao}
        falhaAcao={onFalhaExecucaoAcao}/>

      <div className="flex flex-column md:flex-row gap-3 p-4">
          <div className='flex flex-column'>
            <div className='flex'> 
              <Button disabled={desabilitar} onClick={handleExecutarAcaoComponentePai}>Iniciar execucao acao no componente pai</Button>
            </div>    
            <div className='flex'>
              <label className='pr-2'>STATUS NO COMPONENTE PAI:</label>
                <span>{status}</span> 
                <span>{resultadoAcao?.nome}</span> 
            </div>  
            <div className='flex'>
              <label className='pr-2'>RESULTADO NO COMPONENTE PAI:</label> 
                <span>{resultadoAcao?.nome}</span> 
            </div>  
          </div>  
      </div> 
    </div>
  )
}