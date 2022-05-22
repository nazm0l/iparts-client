import React from 'react';

const Summary = () => {
    return (
        <div className='my-10'>
            <h2 className="text-3xl font-bold text-center">Business Summary</h2>
            <div className="divider"></div>
            <div className='flex justify-between text-white bg-accent-focus py-7 px-10 rounded-xl'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Customers</h2>
                    <h2 className='text-2xl font-extrabold'>100k+</h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Annual revenue</h2>
                    <h2 className='text-2xl font-extrabold'>160M+</h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Reviews</h2>
                    <h2 className='text-2xl font-extrabold'>33k+</h2>
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Parts</h2>
                    <h2 className='text-2xl font-extrabold'>50+</h2>
                </div>
            </div>
        </div>
    );
};

export default Summary;