import Carro from "./Carro"

function Garagem() {
    const carro = ["Ford", "Fiat", "Honda"];
    return (
        <>
        <h1> Meus carros: </h1>
        <ul>
            {Carro.map((marcaCarro) => <Carro marca = {marcamarcaCarro}/>)}
        </ul>
        </>
    )
}

export default Garagem