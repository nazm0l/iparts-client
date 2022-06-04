import React from 'react';
import apple from '../../Images/brands/apple.png'
import realme from '../../Images/brands/Realme.png'
import samsung from '../../Images/brands/samsung.png'
import xiaomi from '../../Images/brands/xiaomi.png'

const Brands = () => {
    return (
        <div className='mt-10 mb-20'>
            <h2 className="text-3xl font-bold text-center my-5">Brands</h2>
            <div class="divider mb-10"></div>
            <div className='flex flex-wrap justify-evenly'>
                <img src={apple} alt="" className='w-[100px] '  />
                <img src={realme} alt="" className='w-[140px] ' />
                <img src={samsung} alt="" className='w-[140px] ' />
                <img src={xiaomi} alt="" className='w-[100px] ' />
            </div>
        </div>
    );
};

export default Brands;