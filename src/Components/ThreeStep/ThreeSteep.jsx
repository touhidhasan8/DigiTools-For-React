import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const ThreeSteep = () => {
    return (
        <div className='space-y-5 container mx-auto mb-10 mt-20'>
            <div className='text-center space-y-5'>
                <h1 className='text-2xl md:text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='bg-[#F9FAFC] grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className="card shadow-lg mt-2 mb-2 relative">

                    <div className="badge badge-primary rounded-full flex justify-end absolute top-2 right-5">01</div>

                    <figure className="px-10 pt-10">
                        <img
                            src={User}
                            className=" bg-purple-100 p-2 rounded-full " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card shadow-lg mt-2 mb-2">
                    <div className="badge badge-primary rounded-full flex justify-end absolute top-2 right-5">02</div>
                    <figure className="px-10 pt-10">
                        <img
                            src={Package}
                            className=" bg-purple-100 p-2 rounded-full " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className="card shadow-lg mt-2 mb-2">
                    <div className="badge badge-primary rounded-full flex justify-end absolute top-2 right-5">03</div>
                    <figure className="px-10 pt-10">
                        <img
                            src={Rocket}
                            className=" bg-purple-100 p-2 rounded-full " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeSteep;