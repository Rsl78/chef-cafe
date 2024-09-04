import PropTypes from "prop-types"; // ES6
const WantToCock = ({ order, index }) => {
  const { recipe_name, preparing_time, calories } = order;
  return (
    <>
      {/* row 1 */}
      <tr>
        <td>{index + 1}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories} </td>
        <th>
          <button className="btn bg-[#0BE58A] btn-sm rounded-3xl">
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
};

export default WantToCock;
