import { Link } from "react-router-dom";

function Menu() {
  return(
    <nav className="sticky-top navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">INICIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ours">NOSOTROS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link dropdown-toggle" to="/recipes">RECETAS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">CONTACTOS</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;