import './App.css';
import Questao01 from './componets/Questao01';
import Questao02 from './componets/Questao02';
import Questao03 from './componets/Questao03';
import Questao04 from './componets/Questao04';

function App() {
  const disp = ["CG", "APS", "WEB", "IHC"];
  
  return (
    <div>
      <Questao01 nome="Mateus" sobrenome="Pedrosa" curso="CC" disciplinas={disp}/>
      <Questao02/>
      <Questao03/>
    </div>
  );
}

export default App;
