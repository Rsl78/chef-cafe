import PropTypes from "prop-types"; // ES6
import { FiClock } from "react-icons/fi";
import { GoFlame } from "react-icons/go";

const Recipe = ({ recipe, handleWantsToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  console.log(recipe);
  return (
    <div className="rounded-2xl">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-4 pt-4">
          <img
            src={recipe_image}
            alt={recipe_name}
            className="rounded-xl w-full h-56"
          />
        </figure>
        <div className="px-4 py-4">
          <h2 className="text-xl font-semibold">{recipe_name}</h2>
          <p className="text-[#878787] pb-2">{short_description}</p>

          <hr className="pb-2" />
          <h2 className="text-base">Ingredients: {ingredients.length} </h2>

          <ul className="pb-2">
            {ingredients.map((ingredient, index) => (
              <li className="text-[#878787] list-disc mx-4 text-sm" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>

          <hr className="pt-2" />

          <div className="flex gap-8 text-[#282828cc] ">
            <div className="flex items-center p">
              <FiClock />
              <p className="pl-2">{preparing_time} minutes</p>
            </div>
            <div className="flex items-center p">
              <GoFlame />
              <p className="pl-2">{calories} calories</p>
            </div>
          </div>
          <div className="card-actions pt-2">
            <button
              onClick={() => handleWantsToCook(recipe)}
              className="btn bg-[#0BE58A] rounded-3xl"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantsToCook: PropTypes.func,
};
export default Recipe;
