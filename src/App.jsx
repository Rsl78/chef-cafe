import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Title from "./components/Title/title";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalori, setTotalCalori] = useState(0)

  const [currentlyCookingFoods, setCurrentlyCookingFoods] = useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handlePreparing = (
    recipe_id,
    preparing_time,
    calories,
    currentlyCookingFood
  ) => {
    // console.log("connecting ", currentlyCookingFoods)
    const newCurrentlyCookingFoods = [
      ...currentlyCookingFoods,
      currentlyCookingFood,
    ];
    setCurrentlyCookingFoods(newCurrentlyCookingFoods);

    const updateOrders = orders.filter((order) => order.recipe_id !== recipe_id);
    setOrders(updateOrders)
    console.log("remove id", recipe_id);

    const newTotalTime = totalTime +preparing_time;
    setTotalTime(newTotalTime);

    const newTotalCalori = totalCalori + calories;
    setTotalCalori(newTotalCalori)

  };

  const handleWantsToCook = (wantToOrder) =>{
    const wantToOrderId = wantToOrder.recipe_id;
    console.log(wantToOrderId)

    orders.map()

    // if(){

    // }
    const newOrders = [...orders, wantToOrder];
    setOrders(newOrders)
  }

  return (
    <div className="container  mx-auto font-lexend">
      <Navbar />
      <Header />
      <Title />
      <Recipes
        handlePreparing={handlePreparing}
        handleWantsToCook={handleWantsToCook}
        recipes={recipes}
        orders={orders}
        currentlyCookingFoods= {currentlyCookingFoods}
        totalCalori= {totalCalori}
        totalTime= {totalTime}
      />
    </div>
  );
}

export default App;
