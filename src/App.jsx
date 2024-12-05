import'./App.css'
import Titulo from "./components/Titulo"
import Button from "./components/Button"
import Saudacao from "./components/Saudacao"
import Boatarde from "./components/Boatarde"
import If from "./components/If"
import Imagen from "./components/Imagen"
import Lista from "./components/Lista"
import React from "./components/React"

function App (){
    return (
      <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam enim deleniti quas. Voluptate soluta quae voluptatibus mollitia, ipsam dolor aliquam, consequuntur molestiae cupiditate distinctio, laborum repudiandae possimus sapiente fugiat!
      </p>
      <p>
        Aquele negocinho que faz... "pfih"... jogue na minha papai!
      </p>
      <Titulo />
      <Button />
      <Saudacao />
      <Boatarde />
      <If />
      <Imagen />
      <Lista />
      <React />
      </>
      )

  }
  
  export default App