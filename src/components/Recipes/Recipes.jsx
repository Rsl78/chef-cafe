import PropTypes from "prop-types"; // ES6
import Recipe from "../Recipe/Recipe";

const Recipes = ({ recipes }) => {
  return (
    <div className="flex">
      <div className="w-3/4 flex flex-wrap gap-4">
        {/* <h1>Length: {recipes.length}</h1> */}
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
        ))}
      </div>
      <div className="w-1/4">
        <h1>order</h1>
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};
export default Recipes;
