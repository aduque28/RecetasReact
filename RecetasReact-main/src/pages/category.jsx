import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Aside from "../components/aside";
import { useParams } from "react-router-dom";
import recetas from "./../../public/datos.json";

let Category = () => {
  let {category} = useParams();
  console.log(recetas[category]);
  
  return(
    <>
      <Header/>
      <Menu/>
      <div className="row">
        <Aside/>
        <div className="col-sm-8">
          <h1>Categoria: {category}</h1>
          <div className="row row-cols-1 row-cols-md-2 gt-4">
            {
              recetas[category].map((receta, i)=>(
                <div className="col" key={i}>
                  <div className="card">
                    <img src={receta.imagenes[0]} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{receta.titulo}</h5>
                      <p className="card-text">
                        {receta.texto}
                      </p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )  
}

export default Category;