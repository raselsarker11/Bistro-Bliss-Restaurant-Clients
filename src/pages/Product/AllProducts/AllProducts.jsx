import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Products from "../Products/Products";


const AllProducts = () => {
    const [product, setProduct] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then( res => res.json())
        .then( data => setProduct(data))
    },[])

    return (
        <section className="pt-24">
            <Helmet>
            <title>Bistro Boss | All Product</title>
            </Helmet>
            {/* section title */}
            <SectionTitle subHeading="Don't Miss" heading="All Products"></SectionTitle>
            <div className="md:pl-12 md:pt-8 p-2 max-w-full">
                <div className="w-full py-12 gap-3 grid grid-cols-1 lg:grid-cols-2 md:gap-7">
                   {
                     product.map(item => <Products
                        key={product._id}
                        product={item}
                     ></Products>)
                   }
                </div>
            </div>
        </section>
    );
};

export default AllProducts;