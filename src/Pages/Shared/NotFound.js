import React from 'react';
import notFound from '../../Images/notFound.png'

const NotFound = () => {
    return (
        <div>
            <div>
            <img className='h-screen w-full' src={notFound} alt="" />
        </div>
        </div>
    );
};

export default NotFound;