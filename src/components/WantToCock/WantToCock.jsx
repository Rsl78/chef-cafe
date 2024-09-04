import PropTypes from "prop-types"; // ES6
const WantToCock = ({ order, index, handlePreparing }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = order;
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories} </td>
        <th>
          <button
            onClick={() =>
              handlePreparing(recipe_id, preparing_time, calories, order)
            }
            className="btn bg-[#0BE58A] btn-sm rounded-3xl"
          >
            Preparing
          </button>
        </th>
      </tr>
    </>
  );
};

WantToCock.propTypes = {
  order: PropTypes.object,
  index: PropTypes.number,
  handlePreparing: PropTypes.func,
};

export default WantToCock;
