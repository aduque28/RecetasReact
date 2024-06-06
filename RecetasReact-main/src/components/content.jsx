import Articles from "./articles";
import recetas from "../../public/datos.json"
import { infoContext } from "./recipeProvider";
import { useContext, useEffect, useState } from "react";

let { Arroces, Pastas, Postres, Sopas, Ensaladas } = recetas;
let recipesData = [...Arroces, ...Pastas, ...Postres, ...Sopas, ...Ensaladas];
let recipesRandom = recipesData.sort((a, b)=>Math.random() - 0.5)

function Content() {
  //console.log(recetas);
  
  let {setInfoRecipes} = useContext(infoContext);
  //console.log(dato)
  useEffect(()=>{
    setInfoRecipes(recipesData);
  },[])

  //Estado inicial de las recetas
  let [dataVisible, setDataVisible] = useState(5);

  //Función para cargar más recetas
  let loadRecipes = () => {
    setDataVisible((prev)=> prev + 5)
  }

  return(
    <div className="col-sm-8">
      {
        recipesRandom.slice(0, dataVisible).map((receta, i) => (
          <Articles key={i} id={i} recipes = {receta} />
        ))
      }
      {
        dataVisible < recipesData.length && <button onClick={loadRecipes}>Cargar Más</button>
      }
    </div>
  )    
}

export default Content;