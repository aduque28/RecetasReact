import { Link } from "react-router-dom";

let NoFound = () => {
  return(
    <>
      <h1>LA PAGINA NO EXISTE</h1>
      <Link className="btn btn-success" to="/"> Ir a inicio</Link>
    </>
  )
}

export default NoFound;