import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import headerImg from '../../assets/customer-top.png';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div className="my-24 w-full px-4 md:px-8 lg:px-16">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                <div className="w-2/3 mb-6 flex justify-center items-center">
                    <div className="w-2/3  mb-6">
                        <img
                            src={headerImg}
                            alt="Review Header Illustration"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">What our customers are sayings</h3>
                <p className="text-gray-600 text-sm md:text-base">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce
                    pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Slider */}
            <Swiper
                loop={true}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1.2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    modifier: 1,
                    scale: 0.85,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
