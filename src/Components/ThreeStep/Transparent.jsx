import React from 'react';

const Transparent = () => {
    return (
        <div className='container mx-auto space-y-6 bg-base-200 mb-10'>
            <div className='text-center space-y-5 mt-20'>
                <h1 className=' text-2xl md:text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-10 space-y-5'>

                <div className='bg-base-100 shadow-sm rounded-2xl  p-5 list-none space-y-5 '>
                    <h1 className='text-2xl font-bold mb-5'>Starter</h1>
                    <p>Perfect for getting started</p>
                    <p><span className='text-2xl font-bold'>$0/</span>month</p>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Access to 10 free tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Basic templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Community support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>1 project per month</span>
                    </li>
                    <button className='btn btn-primary rounded-full'>Get Started Free</button>
                </div>


                <div className='bg-primary text-white shadow-sm rounded-2xl  p-5 list-none space-y-5'>
                    <h1 className='text-2xl font-bold mb-5'>Pro</h1>
                    <p >Perfect for getting started</p>
                    <p>$29/month</p>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span >Access to 10 free tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span >Basic templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span >Community support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>1 project per month</span>
                    </li>
                    <button className='btn btn-xs p-5 rounded-full'>Get Started Free</button>
                </div>



                <div className='bg-base-100 shadow-sm rounded-2xl  p-5 list-none space-y-5'>
                    <h1 className='text-2xl font-bold mb-5'>Enterprise</h1>
                    <p className='text-[#627382]'>Perfect for getting started</p>
                    <p>$99/month</p>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Access to 10 free tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Basic templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>Community support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className='text-[#627382]'>1 project per month</span>
                    </li>
                    <button className='btn btn-primary rounded-full'>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default Transparent;