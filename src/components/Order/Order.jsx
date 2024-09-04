import PropTypes from "prop-types"; // ES6
import WantToCock from "../WantToCock/WantToCock";
import CookingFood from "../CookingFood/CookingFood";

const Order = ({ orders, handlePreparing, currentlyCookingFoods, totalTime, totalCalori }) => {
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
              {orders.map((order, index) => (
                <WantToCock
                  key={index}
                  index={index}
                  order={order}
                  handlePreparing={handlePreparing}
                />
              ))}
            </tbody>
          </table>

          <hr className="" />
          <h2 className="card-title ">
            Currently Cooking: {currentlyCookingFoods.length}
          </h2>
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
              {currentlyCookingFoods.map((CurrentlyCookingFood, index) => (
                <CookingFood
                  key={index}
                  CurrentlyCookingFood={CurrentlyCookingFood}
                  index={index}                
                ></CookingFood>
              ))}
              {/* row 1 */}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Total</th>
                <th>{totalTime} Minutes</th>
                <th>{totalCalori} Calories</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {
  orders: PropTypes.array,
  handlePreparing: PropTypes.func,
  currentlyCookingFoods: PropTypes.array,
  totalTime: PropTypes.number,
  totalCalori: PropTypes.number
};

export default Order;
