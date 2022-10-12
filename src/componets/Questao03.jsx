import axios from "axios"
import React from "react"



function Results(props) {
    return <li>{ props.name }</li>;
  }

function Questao03(){
    const [offset, setOffset] = React.useState(0);
    const [api, setApi] = React.useState();
    const baseURL = "https://pokeapi.co/api/v2/pokemon?limit="+10+"&offset="+offset;

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setApi(response.data)
        });
    }, [offset]);

    if (!api) return null;
    return(
        <div>
            <h1>Questão 03.</h1>
            <p>{api.results.map((result) => <Results name={result.name} />)}</p>
            <button type="button" onClick={() => setOffset(offset+10)}>avançar</button>
            
        </div>

    )
}
export default Questao03


