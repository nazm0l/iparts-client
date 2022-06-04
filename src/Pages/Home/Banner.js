import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../Images/rear-camera.jpg'
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div style={{background: `url(https://img.freepik.com/free-vector/stylish-white-background-with-diagonal-lines_1017-33199.jpg?t=st=1654268805~exp=1654269405~hmac=4e7a70217142859dc71c5f84bf46d2b9c452444d7326c31b876c5b2e0f5593f2&w=1480)`}} className="hero my-10 lg:my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={camera}
          className="md:max-w-md sm:max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <motion.div animate={{ opacity: 1,  }} initial={{opacity: 0}} transition={{ duration: 0.7 }}>
          <h1 className="text-5xl font-bold">Your New <span className='text-secondary'>Mobile Parts</span> Partner</h1>
          <p className="py-6 font-semibold">
          You can find any types of iPhone parts in our shop. Any model of iPhone you can find all original and master copy parts.
          </p>
          <Link to='/shop' className='btn btn-primary'>Purchase Now</Link>
        </motion.div>
      </div>
    </div>
    );
};

export default Banner;