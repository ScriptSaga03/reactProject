import React from 'react';
import sung from '../assets/browerImage/sung.jpg';

export default function BrowseByStyle() {
    return (
        <section id='browseByStyle' className='bg-white w-full mb-10 px-4 pt-6'>
            <div className='w-full max-w-7xl mx-auto bg-gray-light md:p-10 p-6 rounded-2xl shadow-lg'>
                <h1 className="md:mb-16 sm:mb-12 mb-8 md:mt-2 mt-4 font-heading text-3xl md:text-4xl sm:text-3xl font-extrabold uppercase leading-tight tracking-wide text-black text-center">
                    Browse By Dress Style
                </h1>
                <div className="grid grid-rows-2 gap-6">
                    {/* First Column */}
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                        <div className="relative group transition-all duration-300 hover:scale-105 ease-in-out cursor-pointer hover:shadow-xl">
                            <h2 className='absolute top-4 left-6 font-bold text-lg text-white bg-black/50 px-3 py-1 rounded-md'>
                                Women's Bag
                            </h2>
                            <img
                                className="h-60 w-full object-cover rounded-lg group-hover:opacity-90"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                                alt="Women's Bag"
                            />
                        </div>
                        <div className="sm:col-span-2 relative group transition-all duration-300 hover:scale-105 ease-in-out cursor-pointer hover:shadow-xl">
                            <h2 className='absolute top-4 left-6 font-bold text-lg text-white bg-black/50 px-3 py-1 rounded-md'>
                                Sunglasses
                            </h2>
                            <img
                                className="h-60 w-full object-cover rounded-lg group-hover:opacity-90"
                                src={sung}
                                alt="Sunglasses"
                            />
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
                        <div className="sm:col-span-2 relative group transition-all duration-300 hover:scale-105 ease-in-out cursor-pointer hover:shadow-xl">
                            <h2 className='absolute top-4 left-6 font-bold text-lg text-white bg-black/50 px-3 py-1 rounded-md'>
                                Watches
                            </h2>
                            <img
                                className="h-60 w-full object-cover rounded-lg group-hover:opacity-90"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                                alt="Watches"
                            />
                        </div>
                        <div className="relative group transition-all duration-300 hover:scale-105 ease-in-out cursor-pointer hover:shadow-xl">
                            <h2 className='absolute top-4 left-6 font-bold text-lg text-white bg-black/50 px-3 py-1 rounded-md'>
                                Shoes
                            </h2>
                            <img
                                className="h-60 w-full object-cover rounded-lg group-hover:opacity-90"
                                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                                alt="Shoes"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
