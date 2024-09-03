import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Title from "./components/Title/title";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container  mx-auto font-lexend">
      <Navbar />
      <Header />
      <Title />
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default App;
