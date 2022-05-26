import React from 'react';

const Portfolio = () => {
    return (
        <div className='container mx-auto mb-10'>
            <h2 className='text-2xl my-10 text-center font-bold'>My Portfolio</h2>
            <div class="divider"></div> 
            <div className='text-center bg-cyan-100 py-10 rounded-lg'>
                <h2 className='text-xl mt-2'><span className='font-bold'>Name:</span> Md. Najmul Hossen</h2>
                <h2 className='text-xl mt-2'><span className='font-bold'>Email:</span> nazmul0w1@gmail.com</h2>
                <h2 className='text-xl mt-2'><span className='font-bold'>Education:</span> BSC in CSE (Green University of Bangladesh)</h2>
                <h2 className='text-xl mt-2'><span className='font-bold'>Skilled on:</span> React Js, Node Js, Express Js, Mongodb, Tailwind, CSS, HTML, Bootstrap, Firebase, Netlify, Heroku.</h2>
                <div className='text-center bg-cyan-100 py-10'>
                    <h2 className='text-xl font-bold my-5'>My Projects</h2>
                    <p className='font-bold my-2'>Project-1 Link: <a className='text-blue-600' href="https://car-warehouse-b83ff.web.app/">N&M Automobiles</a></p>
                    <p className='font-bold my-2'>Project-2 Link: <a className='text-blue-600' href="https://health-care-services-b083b.web.app/">Health Care Services</a></p>
                    <p className='font-bold my-2'>Project-3 Link: <a className='text-blue-600' href="https://nazmul-car-services.web.app/">Nazmul Car Shop</a></p>
                    <p>I'm still working on my project. Also i have plan to build a new project after a week.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;