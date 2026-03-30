import React from 'react';

const PlayGround = () => {
    return (
        <div className=' mb-10'>
            <div className=" grid grid-cols-1 justify-items-center items-center lg:grid-cols-3 p-10 bg-linear-to-bl from-violet-500 to-fuchsia-500">
                <div className='border-r-2 p-5 text-white'>
                    <h1 className='text-6xl font-semibold text-white'>50K+</h1>
                    <p className='text-[#FFFFFF]'>Active Users</p>
                </div>
                <div className='border-r-2 p-5 text-white'>
                    <h1 className='text-6xl font-semibold text-white '>200+</h1>
                    <p className='text-[#FFFFFF]'>Premium Tools</p>
                </div>
                <div className='border-r-2 p-5 text-white'>
                    <h1 className='text-6xl font-semibold text-white'>4.9</h1>
                    <p className='text-[#FFFFFF] '>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default PlayGround;