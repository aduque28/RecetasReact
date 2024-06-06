
import Home from "./pages/home"
import Ours from "./pages/ours"
import Contact from "./pages/contact"
import Recipes from "./pages/recipes"
import Recipe from "./pages/recipe"
import { Routes, Route } from "react-router-dom"
import { RecipesProvider } from "./components/recipeProvider"
import Category from "./pages/category"
import NoFound from "./pages/nofound"

function App() {
  return (
    <>
      <RecipesProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ours" element={<Ours/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/recipe/:id" element={<Recipe/>}/>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="*" element={<NoFound/>}/>
        </Routes>
      </RecipesProvider>
    </>
  )
}

export default App