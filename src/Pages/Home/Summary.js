import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';

const Summary = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold text-center">Business Summary</h2>
            <div className="divider"></div>
            <div className='flex justify-between text-white bg-accent-focus py-7 px-10 rounded-xl'>
                <div className=''>
                    <IoIosPeople className='text-6xl'/>
                    <h2 className='text-2xl font-extrabold'>100k+</h2>
                    <h2 className='text-xl font-bold'>Customers</h2>
                </div>
                <div className=''>
                    <BiDollarCircle className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>160M+</h2>
                    <h2 className='text-xl font-bold'>Annual revenue</h2>
                </div>
                <div className=''>
                    <MdReviews className='text-6xl'/>
                    <h2 className='text-2xl font-extrabold'>33k+</h2>
                    <h2 className='text-xl font-bold'>Reviews</h2>
                </div>
                <div className=''>
                    <RiToolsFill className='text-6xl' />
                    <h2 className='text-2xl font-extrabold'>50+</h2>
                    <h2 className='text-xl font-bold'>Parts</h2>
                </div>
            </div>
        </div>
    );
};

export default Summary;