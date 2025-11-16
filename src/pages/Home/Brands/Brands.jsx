import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Brand images
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';

const brandLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_people];

const Brands = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold text-center mb-10'>
                We've helped thousands of sales teams
            </h2>

            <Swiper
                loop={true}                     // keep looping
                loopFillGroupWithBlank={true}   // ensures proper looping when slidesPerView ~ total slides
                centeredSlides={true}           // center active slide
                spaceBetween={20}               // space between slides
                grabCursor={true}               // cursor looks like grab
                modules={[Autoplay]}            // swiper modules
                autoplay={{
                    delay: 1500,                // time between slides
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: false,   // keeps autoplay running even on hover
                }}
                breakpoints={{
                    0: { slidesPerView: 2 },       // mobile
                    480: { slidesPerView: 3 },     // small tablets
                    768: { slidesPerView: 3 },     // tablets
                    1024: { slidesPerView: 3 },    // desktops
                    1280: { slidesPerView: 4 },    // large screens
                }}
            >
                {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={logo}
                            alt="Brand"
                            className="w-24 mx-auto opacity-70 hover:opacity-100 transition-all"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
