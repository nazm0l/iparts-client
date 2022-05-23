import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-2xl font-bold text-center'>Blogs</h2>
            <div className="divider"></div>
            <div className='bg-cyan-100 p-10 rounded-2xl'>
                <h2 className='text-2xl mb-3'>Q: How will you improve the performance of a React Application?</h2>
                <p>Ans:</p>
            </div>
            <div className='bg-cyan-100 p-10 rounded-2xl my-4'>
                <h2 className='text-2xl mb-3'>Q: What are the different ways to manage a state in a React application?</h2>
                <p>Ans:</p>
            </div>
            <div className='bg-cyan-100 p-10 rounded-2xl'>
                <h2 className='text-2xl mb-3'>Q: How does prototypical inheritance work?</h2>
                <p>Ans:</p>
            </div>
            <div className='bg-cyan-100 p-10 rounded-2xl my-4'>
                <h2 className='text-2xl mb-3'>Q: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>Ans:</p>
            </div>
            <div className='bg-cyan-100 p-10 rounded-2xl my-4'>
                <h2 className='text-2xl mb-3'>Q: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>Ans:</p>
            </div>
        </div>
    );
};

export default Blogs;