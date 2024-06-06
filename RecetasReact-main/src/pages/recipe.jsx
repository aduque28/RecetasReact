import { json, useParams } from "react-router-dom";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Aside from "../components/aside";
import { infoContext } from "../components/recipeProvider";
import { useContext } from "react";
import "./../assets/styles.css"

let Recipe = () => {
  //console.log(useParams())
  let {id} = useParams();
  let {infoRecipes} = useContext(infoContext);
  console.log(infoRecipes[id]);
  let { titulo, subtitulo, texto, imagenes, ingredientes, elaboracion, titulo2, titulo3 } = infoRecipes[id];

  return (
    <>
      <Header/>
      <Menu/>
      <div className="row">
        <Aside />
        <div className="col-sm-8">
          <h1>{titulo}</h1>
          <div className="img-receta">
            <img src={imagenes[0]} alt="imagen-receta-1" />
            <img src={imagenes[1]} alt="imagen-receta-2" />
          </div>
          <h2>{subtitulo}</h2>
          <p>{texto}</p>
          <h3>{titulo2}</h3>
          <ul>
            {
              ingredientes.map((ingre)=>(
                <li>{ingre}</li>
              ))
            }  
          </ul>
          <div className="img-receta">
            <img src={imagenes[0]} alt="imagen-receta-1" />
          </div>
          <h3>{titulo3}</h3>
          <ol>
            {
              elaboracion.map((elab)=>(
                <li>{elab}</li>
              ))
            }
          </ol>
        </div>
      </div>
      <Footer />
    </>

    
  )
}

export default Recipe