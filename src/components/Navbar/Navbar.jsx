import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 pt-4">
      <div className="navbar-start font-bold text-3xl">
        <h1>Recipe Calories</h1>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">Recipes</a>
        <a className="btn btn-ghost">About</a>
        <a className="btn btn-ghost">Search</a>
      </div>
      <div className="navbar-end">
        <button className="text-2xl absolute m-16"><CiSearch/></button>
        <input
          type="text"
          placeholder="search here"
          className="border p-2 pl-4 rounded-3xl"
        />
        
        
        <div className="ml-4 bg-[#0BE58A] p-2 rounded-full">
          <FaRegUserCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
