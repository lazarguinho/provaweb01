import axios from "axios"
import React from "react"

function Questao04(){
    const baseURL = "https://restcountries.com/v2/region/africa?fields=name,population"
    const [countries, setCountries] = React.useState(null)
    var populations

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setCountries(response.data);
        });
    }, []);

    if (!countries) return null;

    return(
        <div>
            <h1>Questão 04.</h1>
            <h2>{countries[0].name}</h2>
            {countries.map((countrie) => {populations.push(countrie.population)})}
        </div>
    )
}
export default Questao04

