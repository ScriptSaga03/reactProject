import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, closeModal } from '../state management/Reducer';

export default function Modal() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);
    const product = useSelector((state) => state.modal.cardDetails);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedThumbnail, setSelectedThumbnail] = useState('');
    const [selectProductPrice,setSelectProductPrice] = useState(null);


    // Check if product exists, if not, set default values
    useEffect(() => {
        if (product) {
            setSelectedThumbnail(product.thumbnail);
            setSelectProductPrice(product.price);
        }
    }, [product]);

    if (!isOpen || !product) return null;

    const sizes = [
        { label: 'XXS', value: 'XXS' },
        { label: 'XS', value: 'XS' },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
        { label: 'XXL', value: 'XXL' },
        { label: 'XXXL', value: 'XXXL', disabled: true },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Size:', selectedSize);
    };


    // change dynamic images 
    const handleThumbnailClick = (image) => {
        setSelectedThumbnail(image);
    };

     // Handle Add to Cart
     const handleAddToCart = () => {
        if (selectedSize) {
            dispatch(addToCart({ ...product, selectedSize,selectProductPrice}));
            dispatch(closeModal()); 
        } else {
            alert('Please select a size');
        }
    };
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10 w-screen overflow-y-auto transition-all ease-in-out duration-500">
                <div className="flex min-h-full items-center justify-center gap-2 p-4 sm:p-0">
                    <div className="relative w-full max-w-4xl mt-24 bg-white rounded-lg shadow-lg p-6 sm:w-11/12 md:w-3/4 lg:max-w-4xl transform transition-all ease-in-out duration-500">
                        {/* Close Button */}
                        <button
                            type="button"
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-6"
                            onClick={() => dispatch(closeModal())}
                        >
                            <span className="sr-only">Close</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col sm:flex-row sm:max-w-full  gap-6">
                            {/* Image Section */}
                            <div className="w-full sm:w-1/3">
                                <img
                                    src={selectedThumbnail || product?.thumbnail || '/path/to/default/image.jpg'}
                                    alt="Product image"
                                    className="w-full h-60 rounded-lg bg-gray-100 object-cover sm:h-auto"
                                />
                                {/* Thumbnail Selection */}
                                <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 ">
                                    {product?.images?.map((multiChoice, ind) => (
                                        <div key={ind}>
                                            <div className="relative overflow-hidden rounded-lg shadow-lg">
                                                <img
                                                    src={multiChoice}
                                                    alt={`Image ${ind + 1}`}
                                                    className="w-full h-24 sm:h-28 object-cover"
                                                    onClick={() => handleThumbnailClick(multiChoice)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Details Section */}
                            <div className="sm:w-2/3 flex flex-col justify-between">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h2>
                                <p className="text-2xl text-gray-900 mb-4">${selectProductPrice || product.price}</p>

                                {/* Product Reviews */}
                                <div className="mt-4 flex items-center">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < 4 ? "text-yellow-300" : "text-gray-400"}`}
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-indigo-600 hover:text-indigo-500 ml-3">{product.reviews?.length || 0} reviews</p>
                                </div>

                                {/* Size Selection Form */}
                                <form onSubmit={handleSubmit} className="mt-6">
                                    <fieldset aria-label="Choose a size">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-medium text-gray-900">Size</div>
                                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                        </div>

                                        <div className="mt-4 grid grid-cols-4 gap-4">
                                            {sizes.map((size) => (
                                                <label
                                                    key={size.value}
                                                    className={`group relative flex cursor-pointer items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase shadow-sm 
                                                    ${size.disabled
                                                            ? "cursor-not-allowed bg-gray-50 text-gray-200"
                                                            : selectedSize === size.value
                                                                ? "ring-2 ring-indigo-500 bg-white text-gray-900"
                                                                : "bg-white text-gray-900 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="size-choice"
                                                        value={size.value}
                                                        className="sr-only"
                                                        disabled={size.disabled}
                                                        onChange={() => setSelectedSize(size.value)}
                                                    />
                                                    <span>{size.label}</span>
                                                    {!size.disabled && <span className="pointer-events-none absolute -inset-px rounded-md"></span>}
                                                    {size.disabled && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                        >
                                                            <svg
                                                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                                viewBox="0 0 100 100"
                                                                preserveAspectRatio="none"
                                                                stroke="currentColor"
                                                            >
                                                                <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                                                            </svg>
                                                        </span>
                                                    )}
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>

                                    <button
                                        type="submit"
                                        onClick={handleAddToCart}
                                        disabled={!selectedSize}
                                        className={`mt-6 flex w-full items-center justify-center rounded-md px-8 py-3 text-base font-medium 
                                        ${selectedSize
                                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                                    >
                                        Add to bag
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
