import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../Images/rear-camera.jpg'

const Banner = () => {
    return (
        <div className="hero my-10 lg:my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={camera}
          className="md:max-w-md sm:max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New <span className='text-secondary'>Mobile Parts</span> Partner</h1>
          <p className="py-6 font-semibold">
          You can find any types of iPhone parts in our shop. Any model of iPhone you can find all original and master copy parts.
          </p>
          <Link to='/shop' className='btn btn-primary'>Purchase Now</Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;