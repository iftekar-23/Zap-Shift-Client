import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import Reviews from '../../Reviews/Reviews';


const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <section className='my-5'><Banner></Banner></section> 
           <section>
            <HowItWorks></HowItWorks>
           </section>
           <section className='my-5'>
            <OurServices></OurServices>
           </section>
           <section className='mt-10'>
                <Brands></Brands>
           </section>
           <section>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
           </section>
        </div>
    );
};

export default Home;