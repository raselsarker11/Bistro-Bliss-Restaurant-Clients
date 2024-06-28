import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TopRated from "../TopRated/TopRated";
import { Link } from "react-router-dom";


const TopRatedProducts = () => {
  const [topRatedFood, setTopRatedFood] = useState([]);

  useEffect(() => {
    fetch('topFood.json')
      .then(res => res.json())
      .then(data => setTopRatedFood(data));
  }, []);

  return (
    <section className="pt-24">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Top Rated Products"
      />
      <div className="w-full py-12 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {topRatedFood.map(product => (
          <TopRated 
            key={product._id}
            product={product}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Link to="/product">
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </Link>
      </div>

    </section>
  );
};

export default TopRatedProducts;
