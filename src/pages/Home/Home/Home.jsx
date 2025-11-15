import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
           <section className='my-5'><Banner></Banner></section> 
           <section>
            <HowItWorks></HowItWorks>
           </section>
           <section>
            <OurServices></OurServices>
           </section>
        </div>
    );
};

export default Home;