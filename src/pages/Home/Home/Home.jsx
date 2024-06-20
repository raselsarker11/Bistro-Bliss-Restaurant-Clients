import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from 'react-helmet-async';
import TopRatedProducts from "../TopRatedProducts/TopRatedProducts";
import Status from "../Status/Status";
import Blogs from "../Blogs/Blogs";
import Subscribe from "../Subscribe/Subscribe";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <TopRatedProducts></TopRatedProducts>
            <Status></Status>
            <Blogs></Blogs>
            <Subscribe></Subscribe>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;