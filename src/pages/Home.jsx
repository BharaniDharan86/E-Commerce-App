import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import FeaturedProduct from "../features/featured-Products/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-rows-2 gap-1 items-center pt-4 sm:grid-cols-2 align-middle sm:grid-rows-1 sm:h-[700px] sm:pt-0 sm:justify-center">
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Velvet Vogue"
            className="px-2 sm:p-6 "
          />
        </div>
        <div className="p-3 sm:p-8">
          <p className="font-bold mb-8 text-lg tracking-tighter sm:text-3xl sm:mb-14">
            Explore a curated collection of furniture, effortlessly blending
            comfort and trend. Redefine your living space—your perfect piece
            awaits.
          </p>

          <NavLink
            to="/product"
            className="bg-stone-950 px-3 py-2 text-white sm:text-xl sm:px-5 sm:py-3 hover:bg-stone-800 transition-all duration-200"
          >
            View Products
          </NavLink>
        </div>
      </div>
      <FeaturedProduct />
    </div>
  );
};

export default Home;
