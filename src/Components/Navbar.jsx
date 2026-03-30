import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-3 md:px-6">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li className="hover:text-[#4F39F6] cursor-pointer">Products</li>
                        <li className="hover:text-[#4F39F6] cursor-pointer">Features</li>
                        <li className="hover:text-[#4F39F6] cursor-pointer">Pricing</li>
                        <li className="hover:text-[#4F39F6] cursor-pointer">Testimonials</li>
                        <li className="hover:text-[#4F39F6] cursor-pointer">FAQ</li>
                    </ul>
                </div>

                <a className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-bold">
                    DigiTools
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 text-sm md:text-base">
                    <li className="hover:text-[#4F39F6] cursor-pointer">Products</li>
                    <li className="hover:text-[#4F39F6] cursor-pointer">Features</li>
                    <li className="hover:text-[#4F39F6] cursor-pointer">Pricing</li>
                    <li className="hover:text-[#4F39F6] cursor-pointer">Testimonials</li>
                    <li className="hover:text-[#4F39F6] cursor-pointer">FAQ</li>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3 md:gap-4">

                <div className="relative inline-block">
                    <CiShoppingCart className="text-xl md:text-2xl" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs px-1.5 py-0.5 rounded-full">
                        0
                    </span>
                </div>

                <h1 className="text-sm md:text-base cursor-pointer">Login</h1>

                <h1 className="hidden md:flex bg-linear-to-r from-[#4F39F6] to-pink-500 px-3 py-1.5 text-sm md:text-base text-white rounded-2xl cursor-pointer">
                    Get Started
                </h1>
            </div>

        </div>
    );
};

export default Navbar;