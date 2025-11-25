import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './app/pages/home/Home';
import { CadastroSample } from './app/pages/sample/CadastroSample'; 
import { Exemplo00 } from './app/pages/Exemplo00/Exemplo00';
import { Exemplo01 } from './app/pages/Exemplo01/Exemplo01';
import { Exemplo02 } from './app/pages/Exemplo02/Exemplo02';
import { Exemplo03 } from './app/pages/Exemplo03/Exemplo03';
import { Exemplo04 } from './app/pages/Exemplo04/Exemplo04';
import { Exemplo05 } from './app/pages/Exemplo05/Exemplo05';
import { Exemplo06 } from './app/pages/Exemplo06/Exemplo06';
import { Exemplo07 } from './app/pages/Exemplo07/Exemplo07';
import { Exemplo08 } from './app/pages/Exemplo08/Exemplo08';

function App() {
  return (
     <BrowserRouter>
      <Routes>   
        <Route path="/" element={<Home/>} /> 
        <Route path="/exemplo-00"  element={<Exemplo00/>} />  
        <Route path="/exemplo-01"  element={<Exemplo01/>} />  
        <Route path="/exemplo-02"  element={<Exemplo02/>} />   
        <Route path="/exemplo-03"  element={<Exemplo03/>} />   
        <Route path="/exemplo-04"  element={<Exemplo04/>} />   
        <Route path="/exemplo-05"  element={<Exemplo05/>} />   
        <Route path="/exemplo-06"  element={<Exemplo06/>} />
        <Route path="/exemplo-07"  element={<Exemplo07/>} />  
        <Route path="/exemplo-08"  element={<Exemplo08/>} />   
        <Route path="/sample"  element={<CadastroSample/>} />   
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
