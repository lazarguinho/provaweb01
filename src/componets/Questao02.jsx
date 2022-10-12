import { useState } from "react";

function Questao02(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)
    return(
        <div>
            <h1>Questão 02.</h1>  
            <form>
                <input type="number" 
                onChange={(e) => setNumero1(e.target.valueAsNumber)}
                placeholder="Número 1"/> 
                <input type="number" 
                onChange={(e) => setNumero2(e.target.valueAsNumber)}
                placeholder="Número 2"/><br/>
                <button type="button"
                onClick={() => setResultado(numero1 + numero2)}
                >+</button><button type="button"
                onClick={() => setResultado(numero1 - numero2)}
                >-</button><button type="button"
                onClick={() => setResultado(numero1 * numero2)}
                >*</button><button type="button"
                onClick={() => setResultado(numero1 / numero2)}
                >/</button><br/>
                <p>Resultado: {resultado}</p>            
             </form>
        </div>
    )
}

export default Questao02