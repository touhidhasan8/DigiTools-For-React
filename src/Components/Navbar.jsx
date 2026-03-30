import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className=" bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='flex gap-4 '>
                    <li className='hover:text-[#4F39F6]'>Products</li>
                    <li className='hover:text-[#4F39F6]'>Features</li>
                    <li className='hover:text-[#4F39F6]'>Pricing</li>
                    <li className='hover:text-[#4F39F6]'>Testimonials</li>
                    <li className='hover:text-[#4F39F6]'>FAQ</li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="relative inline-block">
                    <CiShoppingCart size={25} />

                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        0
                    </span>
                </div>
                <h1 >Login</h1>
                <h1 className='hidden md:flex bg-linear-65 from-[#4F39F6] to-pink-500 p-2 text-white rounded-2xl'>Get Started</h1>
            </div>
        </div>
    );
};

export default Navbar;