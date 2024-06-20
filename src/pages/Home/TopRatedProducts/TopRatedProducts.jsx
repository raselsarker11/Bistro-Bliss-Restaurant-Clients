import { useState, useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TopRated from "../TopRated/TopRated";

const TopRatedProducts = () => {
  const [topRatedFood, setTopRatedFood] = useState([])

  useEffect(() => {
    fetch('topFood.json')
      .then(res => res.json())
      .then(data => setTopRatedFood(data))
  }, [])

  return (
    <section>
      <SectionTitle
        heading="From Our Menu"
        subHeading="Top Rated Products"
      ></SectionTitle>
      <div>
        {
          topRatedFood.map(product => <TopRated 
            key={product._id}
            product={product}
          />)
        }
      </div>
    </section>
  );
};

export default TopRatedProducts;
