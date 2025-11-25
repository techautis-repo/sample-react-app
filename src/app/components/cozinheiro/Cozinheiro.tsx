import { ConfiguracoesCozinheiro, CozinheiroProps, Pessoa } from '../base/interfaces' 
import { Button } from 'primereact/button'
import { useCozinheiro } from './useCozinheiro'

export const Cozinheiro = (props: CozinheiroProps<ConfiguracoesCozinheiro, Pessoa>) =>  {
    
    const {value, prepararRefeicao, status, refeicao } = useCozinheiro(props) 

    return (
        <div className="flex flex-column md:flex-row gap-3 p-4">
            <div className='flex flex-column'>
                <div className='flex'> 
                  <Button onClick={prepararRefeicao}>Iniciar Preparo Refeição</Button>
                </div>  
                <div className='flex pt-2 pb-2'>
                    <label className='pr-2'>Código:</label>
                    <span>{value?.dadosPessoa.codg}</span>
                </div>  
                <div className='flex'>
                    <label className='pr-2'>Nome:</label>
                    <span>{value?.dadosPessoa.nome}</span> 
                </div>  
                <div className='flex'>
                    <label className='pr-2'>Idade:</label>
                    <span>{value?.dadosPessoa.idade}</span> 
                </div>
                <div className='flex'>
                    <label className='pr-2'>Tempo preparo refeicao:</label>
                    <span>{value?.config.tempoParaPrepararRefeicao}</span> 
                </div> 
                <div className='flex'>
                    <label className='pr-2'>Status:</label>
                    <span>{status}</span> 
                </div> 
                <div className='flex'>
                    <label className='pr-2'>Refeicao:</label>
                    <span>{refeicao?.nome}</span> 
                </div> 
            </div>  
        </div>
    ) 
} 