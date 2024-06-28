import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';

import { Link } from "react-router-dom";

import './Categories.css';


const Categories = () => {
    return (
        <section>
            <SectionTitle
             subHeading={"From 11.00am to 10.00pm"}
             heading={"Our Category"}
            ></SectionTitle>

            <section className="p-4">
                <h2 className="text-3xl font-bold mb-4">Our Categories</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link to="/menu" className="swiper-card-link">
                        <div className="flex items-center swiper-card">
                            <img src={slide1} alt="Salads" className="swiper-card-image h-[100] w-[100] rounded-md mr-4" />
                            <div className="swiper-card-details">
                                <h3 className="text-4xl uppercase text-white">Salads</h3>
                            </div>
                        </div>
                    </Link>

                    <div className="flex space-x-2">
                        <div className="flex-1 max-w-xs mr-5">
                            <img src={slide2} alt="" style={{borderRadius: '100 100px 100px 100px'}} className="w-[100px]" />
                        </div>
                        <div className="flex-2">
                            <p className="text-2xl font-bold text-gray-800">Desserts</p>
                        </div>
                    </div>


                
            </div>
        </section>
        </section>
    );
};

export default Categories;