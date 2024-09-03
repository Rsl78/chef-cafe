const Header = () => {
  return (
    <div className="bg-chef bg-no-repeat bg-cover mt-10 flex justify-center items-center min-h-[600px] rounded-2xl">
      <div className="text-white text-center w-2/3">
        <h1 className="text-5xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-sm pt-10">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="pt-10">
          <button className="btn rounded-3xl bg-[#0BE58A] mr-9">
            Explore Now
          </button>
          <button className="btn btn-outline rounded-3xl text-white">
            Our FeedBack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
