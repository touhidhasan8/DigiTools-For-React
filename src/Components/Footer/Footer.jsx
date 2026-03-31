import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-black text-white  px-6 md:px-10 py-10">

            <div className="footer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

           
                <aside>
                    <p className='text-3xl md:text-4xl font-bold'>DigiTools</p>
                    <p className='mt-2 text-sm md:w-48'>
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </aside>

          
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>

      
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>

           
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-5 mt-2'>
                        <a className="link link-hover"><CiInstagram size={25} /></a>
                        <a className="link link-hover"><FaFacebook size={25} /></a>
                        <a className="link link-hover"><FaXTwitter size={25} /></a>
                    </div>
                </nav>

            </div>

        </footer>
    );
};

export default Footer;