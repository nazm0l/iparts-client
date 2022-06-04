import React from 'react';
import Banner from './Banner'
import Parts from './Parts'
import Summary from './Summary'
import Reviews from './Reviews'
import Contact from './Contact';
import Why from './Why';
import Brands from './Brands';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
            <Why />
            <Brands />
            <Contact />
        </div>
    );
};

export default Home;