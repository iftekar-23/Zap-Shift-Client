import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
           <section className='my-5'><Banner></Banner></section> 
           <section>
            <HowItWorks></HowItWorks>
           </section>
        </div>
    );
};

export default Home;