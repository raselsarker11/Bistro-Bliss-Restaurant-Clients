// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
// import slide6 from '../../../assets/home/slide6.jpg';
// import slide7 from '../../../assets/home/slide7.jpg';
// import slide8 from '../../../assets/home/slide8.jpg';
// import slide9 from '../../../assets/home/slide9.jpg';
// import slide10 from '../../../assets/home/slide10.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';


const Category = () => {
    return (
        <section>
            <SectionTitle
             subHeading={"From 11.00am to 10.00pm"}
             heading={"Our Category"}
            ></SectionTitle>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <Link to="/salad">
                        <img src={slide1} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/soup">
                        <img src={slide2} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soup</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/dessert">
                        <img src={slide3} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/pizza">
                        <img src={slide4} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide5} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Drink</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide5} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Beef</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide1} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Checken</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide2} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Mauton</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide3} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Seafood</h3>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/commingsoon">
                        <img src={slide4} alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Goat</h3>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;