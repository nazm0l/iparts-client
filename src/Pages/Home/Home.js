import React from 'react';
import Banner from './Banner'
import Parts from './Parts'
import Summary from './Summary'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div>
            <h2 className="text-2xl">Welcome to Home</h2>
            <Banner />
            <Parts />
            <Summary />
            <Reviews />
        </div>
    );
};

export default Home;