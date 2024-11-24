import React, { useEffect, useState } from 'react';
import NewArrival from '../utility functions/NewArrival';
import TopSelling from '../utility functions/TopSelling';
import Modal from '../reusable components/Modal'
import CartDrawer from '../reusable components/CartDrawer';

// images
import herosix from '../assets/herosix.jpg';
import herofour from '../assets/herofour.jpg';
import herothree from '../assets/herothree.jpg';

// brands
import versace from '../assets/brands/versace.png'
import calvin from '../assets/brands/calvin.png'
import gucci from '../assets/brands/gucci.png'
import prada from '../assets/brands/prada.png'
import zara from '../assets/brands/zara.png'
import BrowseByStyle from './BrowseByStyle';
import ReviewByCustomer from '../reusable components/ReviewByCustomer';

export default function Home() {
  return (
    <section className="container-fluid bg-white relative" id="home">
      <div className="xl:container mx-auto w-full px-4">
        <div className="w-full pt-2 flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="left  xl:px-0 lg:px-4 md:w-1/2 w-full  flex flex-col lg:gap-3 pt-2">
            <div className='flex md:flex-col sm:flex-row flex-col md:justify-normal sm:justify-around'>
              <h1 className="mb-4 md:mt-2 cursor-pointer font-heading text-3xl md:text-4xl  sm:text-3xl font-extrabold uppercase leading-tight tracking-tight text-balck dark:text-white md:max-w-80 max-w-64">
                Find Clothes That Matches Your Style
              </h1>
              <p className="mb-6 cursor-pointer font-sans text-xs sm:text-sm text-textSecondary dark:text-gray-400 md:max-w-xl sm:max-w-60  px-1">
                Here at Flowbite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
              </p>
            </div>
            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="button"
                className="w-full font-heading sm:w-1/2 py-3 px-6 text-sm font-medium text-white bg-black rounded-full hover:bg-buttonBlackHover focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Shop Now
              </button>
            </div>

            {/* Brand Power */}
            <div className="w-full grid sm:grid-cols-3 grid-cols-2 text-center mt-5 gap-4 ">
              <div className="flex flex-col items-center col-span-1 cursor-pointer">
                <p className="font-bold text-2xl md:text-2xl sm:text-2xl">200+</p>
                <p className="text-xs font-normal font-heading">International Brands</p>
              </div>
              <div className="flex flex-col items-center col-span-1 cursor-pointer">
                <p className="font-bold text-2xl md:text-2xl sm:text-2xl">2,000+</p>
                <p className="text-xs font-normal font-heading">High-Quality Products</p>
              </div>
              <div className="flex flex-col items-center col-span-2 sm:col-span-1 cursor-pointer">
                <p className="font-bold text-2xl md:text-2xl sm:text-2xl">30,000+</p>
                <p className="text-xs font-normal font-heading">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right md:w-1/2 w-full flex md:justify-end justify-center rounded-md cursor-pointer">
            <picture>
              <source media="(min-width: 1024px)" srcSet={herosix} />
              <source media="(max-width: 998px)" srcSet={herofour} />
              <source media="(max-width: 778px)" srcSet={herothree} />

              <img
                className="w-[700px] sm:h-[450px] h-[300px] object-cover rounded-lg"
                src={herosix}
                alt="Fashion Photoshoot"
              />
            </picture>
          </div>
        </div>
      </div>
      <Brands />
      <NewArrival/>
      <TopSelling/>
      <BrowseByStyle/>
      <ReviewByCustomer/>
      <Modal/>
      <CartDrawer/>
    </section>
  );
}

const Brands = () => {
  // Array of brand logos
  const brandLogos = [versace, calvin, gucci, prada, zara];

  return (
    <div className="w-full bg-black md:py-5 py-3">
      {/* Container for the content */}
      <div className="container mx-auto px-4">
        {/* Responsive grid */}
        <div className="grid grid-cols-3  md:grid-cols-5 gap-3 md:gap-6 place-items-center">
          {/* Map over brand logos */}
          {brandLogos.map((logo, index) => (

            <div key={index} className="flex justify-center items-center">

              <img
                src={logo}
                alt={`brand-${index + 1}`}
                className="md:w-20 md:h-20 w-12 h-12 object-contain"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


