import PropTypes from "prop-types"; // ES6
const CookingFood = ({ CurrentlyCookingFood, index }) => {
  const { recipe_name, preparing_time, calories } = CurrentlyCookingFood;
  return (
    <>
      <tr>
        <td>{index+1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
      </tr>
    </>
  );
};

CookingFood.propTypes ={
    CurrentlyCookingFood: PropTypes.object,
    index: PropTypes.number
}
export default CookingFood;
