import PropTypes from "prop-types"; // ES6
import WantToCock from "../WantToCock/WantToCock";
const Order = ({ orders }) => {
//   const { recipe_name, preparing_time , calories} = orders;
  return (
    <div className="">
      <div className="card w-full shadow-xl">
        <div className="card-body items-center">
          <h2 className="card-title ">Want To Cook: {orders.length}</h2>
          {/* Want to cook table */}

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {
                    orders.map((order, index) => <WantToCock key={index} index={index} order= {order}/>)
                }
            </tbody>
          </table>

          <hr className="" />
          <h2 className="card-title ">Currently Cooking: 0</h2>
          {/* Currently cooking table */}
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>1</td>
                <td>Recipes name</td>
                <td>0 minutes</td>
                <td>0 calories </td>
              </tr>
            </tbody>
            <tfoot>
              <td></td>
              <td>Total</td>
              <td>Minutes</td>
              <td>Calories</td>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  orders: PropTypes.array,
};

export default Order;
