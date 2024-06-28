import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('reviews.json')
        .then( res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            ></SectionTitle>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {
                 reviews.map(review => <SwiperSlide
                    key={review._id}
                 >
                    <div className="flex flex-col items-center mx-24 my-10">
                        <img src={review.img} alt="" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                        <p className="py-3">⭐⭐⭐⭐⭐</p>
                        <p className="py-4">{review.details}</p>
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                    </div>
                 </SwiperSlide>)
               }
            </Swiper>
            
        </section>
    );
};

export default Testimonials;