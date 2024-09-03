import PropTypes from "prop-types"; // ES6

const Recipes = ({ recipes }) => {
  return (
    <div className="flex">
      <div className="w-3/4">
        <h1>Card</h1>
        <h1>Length: {recipes.length}</h1>
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
