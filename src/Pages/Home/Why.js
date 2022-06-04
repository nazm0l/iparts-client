import React from 'react';
import {MdPaid} from 'react-icons/md'
import {MdWatchLater} from 'react-icons/md'
import {MdDoneOutline} from 'react-icons/md'

const Why = () => {
    return (
        <div className='h-[500px] my-10 py-5'>
            <h2 className='text-4xl text-center font-semibold'>4 Reasons to <span className='text-secondary'>Choose</span> Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 mt-10'>
                <div className='text-center px-5'>
                    <div className='flex justify-center'>
                    <MdDoneOutline  className='text-8xl text-secondary drop-shadow-lg'/>
                    </div>
                    <h3 className='text-2xl my-2 font-semibold'>Premium Products</h3>
                    <p className='px-2'>We stand behind our inventory. We only carry dependable Mobile parts that allow you to take your mobile to the next level. We also have a huge selection of virtually every other mobile manufacturer's parts on the market, so take some time to have a look around.</p>
                </div>
                <div className='text-center px-5'>
                    <div className='flex justify-center'>
                    <MdPaid  className='text-8xl text-secondary drop-shadow-lg'/>
                    </div>
                    <h3 className='text-2xl my-2 font-semibold'>Competitive Pricing</h3>
                    <p className='px-2'>Whether you need mobile parts or a full authentic parts, we have you covered. We realize that repeat customers are the key to business longevity, so we keep our prices as low as possible. When you shop with iParts, you know you are getting the most value for your money.</p>
                </div>
                <div className='text-center px-5'>
                    <div className='flex justify-center'>
                    <MdWatchLater  className='text-8xl text-secondary drop-shadow-lg'/>
                    </div>
                    <h3 className='text-2xl my-2 font-semibold '>24/7 Services</h3>
                    <p className='px-2'>We process your orders within 24 hours, and you are ready to hit the track in no time. Our awesome customers keep coming back again and again because we make shopping for customers satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default Why;