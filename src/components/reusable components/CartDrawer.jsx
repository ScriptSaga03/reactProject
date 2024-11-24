import React from 'react';
import { useNavigate } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { cardSliderClose, decrementQuantity, increamentQuantity, removeFromCart} from '../state management/Reducer';

// icon
import { FaCheck } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";

export default function CartDrawer() {
    const dispatch = useDispatch();
    const cardSlide = useSelector((state) => state.modal.cardSlide);
    const carts = useSelector((state) => state.modal.carts)
    // Calculate Subtotal
    const subtotal = carts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);



    console.log(carts)

    const handleOverlayClick = () => {
        dispatch(cardSliderClose());
    };


    const navigate=useNavigate();
    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-500 ease-linear ${cardSlide ? 'opacity-100' : 'opacity-0 pointer-events-none '
                }`}
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-gray-500/75 transition-opacity ${cardSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                aria-hidden="true"
                onClick={handleOverlayClick}

            ></div>

            {/* Drawer Panel */}
            <div className="fixed inset-0 overflow-hidden ">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div
                            className={`pointer-events-auto relative w-screen max-w-md bg-white transform transition-transform duration-500 ease-linear ${cardSlide ? 'translate-x-0' : 'translate-x-full'
                                }`}
                        >


                            {/* Drawer Content */}
                            <div className="flex h-full flex-col overflow-y-scroll py-6 shadow-xl no-scrollbar">
                                {/* Your content */}
                                <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                        <div className="ml-3 flex h-7 items-center">
                                            <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => dispatch(cardSliderClose())}>
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close panel</span>
                                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div>
                                            {carts.length > 0 ? (
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {carts.map((item, index) => (
                                                        <li className="flex py-6" key={index}>
                                                            {/* Product Image */}
                                                            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={item.thumbnail}
                                                                    alt={item.title}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            </div>

                                                            {/* Product Details */}
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href="#">{item.title}</a>
                                                                        </h3>
                                                                        <p className="ml-4">${item.price.toFixed(2)}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.brand || "No details"}</p>
                                                                    <p className="mt-1 text-sm text-gray-500 inline-flex items-center gap-2">{item.availabilityStatus === "In Stock" ? (
                                                                        < >
                                                                            <FaCheck className="text-green-500" />
                                                                            {item.availabilityStatus}
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <CgUnavailable className="text-red-500" />
                                                                            {item.availabilityStatus}
                                                                        </>
                                                                    ) || "No details"}</p>


                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty</p>
                                                                    <div>
                                                                        <button
                                                                            className="border px-2"
                                                                            onClick={() => dispatch(decrementQuantity(index))}
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <span className="px-2">{item.quantity}</span>
                                                                        <button
                                                                            className="border px-2"
                                                                            onClick={() => dispatch(increamentQuantity(index))}
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <button
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            onClick={() => dispatch(removeFromCart(index))} // Add your remove logic here
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-center text-gray-500">Your cart is empty.</p>
                                            )}
                                        </div>
                                    </div></div>



                                {/* // subtotal */}
                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${subtotal}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                    <div className="mt-6">
                                        <button  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={()=>navigate('/checkout')}>Checkout</button>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            or
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
