import PropTypes from "prop-types"; // ES6
import Recipe from "../Recipe/Recipe";
import Order from "../Order/Order";

const Recipes = ({
  recipes,
  handleWantsToCook,
  orders,
  handlePreparing,
  currentlyCookingFoods,
  totalTime,
  totalCalori
}) => {
  return (
    <div className="flex">
      <div className="w-7/12 flex flex-wrap gap-6">
        {/* <h1>Length: {recipes.length}</h1> */}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe_id}
            handleWantsToCook={handleWantsToCook}
            recipe={recipe}
          ></Recipe>
        ))}
      </div>
      <div className=" w-5/12">
        <Order
          handlePreparing={handlePreparing}
          orders={orders}
          currentlyCookingFoods={currentlyCookingFoods}
          totalTime ={totalTime}
          totalCalori = {totalCalori}
        />
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleWantsToCook: PropTypes.func,
  orders: PropTypes.array,
  handlePreparing: PropTypes.array,
  currentlyCookingFoods:PropTypes.array,
  totalTime: PropTypes.number,
  totalCalori: PropTypes.number
};
export default Recipes;
