import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Title from "./components/Title/title";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantsToCook = (order) =>{
    const newOrders = [...orders, order];
    setOrders(newOrders)
  }

  return (
    <div className="container  mx-auto font-lexend">
      <Navbar />
      <Header />
      <Title />
      <Recipes handleWantsToCook={handleWantsToCook} recipes={recipes} orders={orders} />
    </div>
  );
}

export default App;
