import { createContext, useState } from "react";

//Crear contexto global
let infoContext = createContext();

//Crear componente proveedor del contexto
let RecipesProvider = ({children}) => {
  
  let [infoRecipes, setInfoRecipes] = useState("Hola");

  return(
    <infoContext.Provider value={ {infoRecipes, setInfoRecipes} }>
      {/* Componente hijo que utilizará el contexto */}
      {children}
    </infoContext.Provider>  
  )
}

export { infoContext, RecipesProvider }