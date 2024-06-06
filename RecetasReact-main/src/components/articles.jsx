import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types, no-unused-vars
function Articles({recipes, id}) {
  console.log(id);
  return(
    <>
      <h2>{ recipes.titulo }</h2>
      <h5>{ recipes.subtitulo}</h5>
      <Link to={"/recipe/"+id} className="fakeimg img-fluid">
        <img src={ recipes.imagenes[1] } className="img-fluid" />
      </Link>
      <p>{ recipes.texto}</p>
      <hr />
    </>
  );
}

export default Articles;