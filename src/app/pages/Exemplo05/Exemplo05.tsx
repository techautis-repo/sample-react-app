import { useExemplo05 } from './useExemplo05'
import { GenericAction5 } from '../../components/genericAction5/GenericAction5'
import { Button } from 'primereact/button'

export function Exemplo05() {  
  const {
    params,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    handleExecutarAcaoComponentePai,
    status,
    desabilitar,
    resultadoAcao
  } = useExemplo05()

  return (
    <div>
      <h4>Exemplo 04 - acao disparada pelo clique do botao componente pai, atraves da atualizacao das props do componente filho. </h4> 
      <h4>Inclui state no componente pai que desabilita o botao no copmponente pai quando a acao esta sendo executada.</h4> 
      <h4>Inclui state no componente pai para guardar resultado da acao.</h4> 
      <h4>PROBLEMA 1: As caracteriasticas/proriedades de um componente deveriam ter que ser atualizadas para ser possivel acionar uma funcao do mesmo? Isso se equivale a trocar o cadarço do tenis toda vez que vc vai calca-lo. Voce quer fazer isso?  </h4>  
      <h4>PROBLEMA 2: Estamos armazenando o resultado da acao no compenente filho e no componente pai. Isso nao causa nenhum problema exatamente. Mas precisamos guardar a mesma informacao em 2 lugares, 
        ou devemos analisar a necessidade do que estamos construindo para definir onde vamos manter essa informacao?</h4>  

      <GenericAction5 
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