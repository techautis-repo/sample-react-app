import { useExemplo07 } from './useExemplo07'
import GenericAction7 from '../../components/genericAction7/GenericAction7'
import { Button } from 'primereact/button'

export function Exemplo07() {  
  const {
    genericActionRef,
    params,
    onIniciouExecucaoAcao,
    onSucessoExecucaoAcao,
    onFalhaExecucaoAcao,
    onCompletouExecucaoAcao,
    handleExecutarAcaoComponentePai,
    handleObterResultadoAtual,
    status,
    desabilitar,
    infoBaseadaNoResultadoAcaoNaFuncaoSucesso,
    infoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho
  } = useExemplo07()

  return (
    <div>
      <h4>Exemplo 07</h4>  
      <h4>PROBLEMA ANTERIOR 2: Armazenar o resultado da acao no compenente filho e no componente pai.</h4> 
      <h4>SOLUCAO MAIS COERENTE NESTE CASO:</h4> 
      <h4>- Manter o resultado no componente filho e configurar uma maneira do componente pai acessar essa informacao</h4> 

      <GenericAction7
        ref={genericActionRef}
        dadosIniciais={params}  
        iniciarAcao={onIniciouExecucaoAcao}
        sucessoAcao={onSucessoExecucaoAcao}
        completouAcao={onCompletouExecucaoAcao}
        falhaAcao={onFalhaExecucaoAcao}/>

      <div className="flex flex-column md:flex-row gap-3 p-4">
        <div className='flex flex-column'>
          <div className='flex'> 
            <Button disabled={desabilitar} onClick={handleExecutarAcaoComponentePai}>Iniciar execucao acao do componente filho atraves do componente pai</Button>
          </div>    
          <div className='flex'>
            <label className='pr-2'>STATUS NO COMPONENTE PAI:</label>
            <span>{status}</span>  
          </div>  
          <div className='flex'>
            <label className='pr-2'>RESULTADO NO COMPONENTE PAI:</label> 
            <span>{infoBaseadaNoResultadoAcaoNaFuncaoSucesso}</span> 
          </div>  
        </div>   
      </div> 

      <div className="flex flex-column md:flex-row gap-3 p-4">
        <div className='flex flex-column'>
          <div className='flex'> 
            <Button onClick={handleObterResultadoAtual}>Obter o resultado atual no componente filho</Button>
          </div>    
          <div className='flex'>
            <label className='pr-2'>RESULTADO PELA REFERENCIA AO COMPONENTE FILHO:</label> 
            <span>{infoBaseadaNoResultadoAcaoPelaRefDoComponenteFilho}</span> 
          </div>  
        </div>  
      </div>

    </div>
  )
}