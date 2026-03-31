import React from 'react';

const Workflow = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-primary px-5 py-16 md:py-24 text-center space-y-6'>
            
         
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl text-white'>
                Ready to Transform Your Workflow?
            </h1>

     
            <p className='text-sm md:text-base max-w-xl text-white'>
                Join thousands of professionals who are already using Digitals to work smarter. 
                Start your free trial today.
            </p>

      
            <div className='flex flex-col sm:flex-row gap-4'>
                <button className='btn rounded-full px-6 text-purple-400'>
                    Explore Products
                </button>
                <button className='btn rounded-full border border-white bg-primary text-white px-6'>
                    Get Started
                </button>
            </div>

        </div>
    );
};

export default Workflow;