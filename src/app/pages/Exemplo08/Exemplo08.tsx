import { useExemplo08 } from './useExemplo08'
import GenericAction7 from '../../components/genericAction7/GenericAction7'
import { Button } from 'primereact/button'

export function Exemplo08() {  
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
  } = useExemplo08()

  return (
    <div>
      <h4>Exemplo 08</h4>  
      <h4>Mostrar porque pode nao ser interessante guardar o o resultado da acao no componente pai apos a execucao da acao</h4> 
      <h4>PRA AJUDAR LEMBRAR: exemplo do componente que busca dados do cadastro e adiciona informacoes de contato que o usuario precisa digitar</h4>  

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