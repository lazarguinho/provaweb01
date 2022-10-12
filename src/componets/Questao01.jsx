import Questao01a from "./Questao01A"
import Questao01b from "./Questao01B"

function Questao01(props){
    return(
        <div>
            <h1>Questão 01.</h1>
            <Questao01a nome={props.nome} sobrenome={props.sobrenome} curso={props.curso}/>
            <Questao01b disciplinas={props.disciplinas}/>
        </div>
    )
}

export default Questao01