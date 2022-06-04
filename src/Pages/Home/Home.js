import React from 'react';
import Banner from './Banner'
import Parts from './Parts'
import Summary from './Summary'
import Reviews from './Reviews'
import Contact from './Contact';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;