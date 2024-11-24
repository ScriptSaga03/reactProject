import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

// Import react-icons
import { FaSearch } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoHomeOutline, IoBagOutline } from "react-icons/io5";

import { useDispatch } from 'react-redux';
import { cardSlider } from '../state management/Reducer';


export default function Navbar() {
    const carts = useSelector((state) => state.modal.carts.length);


    const dispatch = useDispatch();

    const [show, setShow] = useState(true)
    const [openProfieDropdown, setOpenProfileDropDown] = useState(false);
    const [openProfieDropdownMobile, setOpenProfileDropDownMobile] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);


    const closeMenu = () => {
        setOpenMobileMenu(false);
    };


    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 font-heading">
            {show && (
                <div className='p-2 w-full bg-black sm:flex hidden font-sans'>
                    <div className="container mx-auto flex md:justify-between justify-center">
                        <div className='text-white sm:w-full md:text-[16px] text-[10px] flex sm:justify-center sm:gap-2 gap-1 justify-evenly'>
                            <p className='font-thin'>Sign up and get 20% off to your first order </p>
                            <div>
                                <button className='underline font-heading'>Sign Up Now</button>
                            </div>
                        </div>
                        <div className='text-white md:block hidden cursor-pointer'>
                            <RxCross1 onClick={() => setShow(false)} />
                        </div>
                    </div>
                </div>
            )}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className=" inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={openMobileMenu ? 'true' : 'false'}
                            onClick={() => setOpenMobileMenu(!openMobileMenu)}
                        >
                            <HiMiniBars3BottomLeft className="w-6 h-6 text-primary" />
                        </button>
                    </div>

                    {/* Nav Items */}
                    <div className="flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <h1 className="text-2xl font-bold cursor-pointer text-black">Cartify</h1>
                        </div>
                        <div className="md:block hidden   lg:ms-20 md:ms-16 ms-12">
                            <ul className="flex space-x-4">
                                <li>
                                    <NavLink to="/" className="rounded-md px-3 py-2 text-base font-medium text-black hover:text-gray-dark">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="relative group">
                                    <NavLink to="/product" className="rounded-md px-3 py-2 text-base font-medium text-black hover:text-gray-dark">
                                        Products
                                    </NavLink>

                                    {/* Dropdown Menu for categories */}
                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="py-1">
                                            <NavLink to="/products/categories" className="block px-4 py-2 text-sm font-sans hover:border-b-2 text-gray-600" role="menuitem" id="menu-item-0">
                                                All
                                            </NavLink>
                                            {/* <NavLink  to="/products/categories" className="block px-4 py-2 text-sm font-sans hover:border-b-2 text-gray-600" role="menuitem" id="menu-item-1">
                                                    Hello
                                                </NavLink>
                                                <NavLink  to="/products/categories" className="block px-4 py-2 text-sm font-sans hover:border-b-2 text-gray-600" role="menuitem" id="menu-item-2">
                                                    Mens
                                                </NavLink>
                                                <NavLink  to="/products/categories" className="block px-4 py-2 text-sm font-sans hover:border-b-2 text-gray-600" role="menuitem" id="menu-item-2">
                                                    Womens
                                                </NavLink> */}

                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <NavLink to="/about" className="rounded-md px-3 py-2 text-base font-medium text-black hover:text-gray-dark">
                                        About
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <form className="hidden md:flex items-center max-w-lg mx-auto sm:hidden ">
                        <label htmlFor="voice-search" className="sr-only text-base font-medium">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>

                            </div>
                            <input
                                type="text"
                                id="voice-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full pl-10 p-2.5"
                                placeholder="Search Your Favorite Products..."
                                required
                            />

                        </div>
                        <button
                            type="submit"
                            className="lg:inline-flex hidden  items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-buttonBlack rounded-lg border border-primary hover:bg-buttonBlackHover focus:ring-4 focus:outline-none focus:ring-indigo-300"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            Search
                        </button>
                    </form>

                    {/* Icons and Profile Dropdown */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <NavLink to="checkout"> */}
                        <button type="button" className="hidden md:block" onClick={() => dispatch(cardSlider())}>

                            <IoBagOutline className="w-7 h-7 text-gray-dark hover:text-gray-light" />
                            {carts > 0 && (
                                <span className="absolute top-2 right-10 inline-flex items-center justify-center h-5 w-5 text-xs font-semibold text-white bg-red-500 rounded-full">
                                    {carts}
                                </span>
                            )}

                        </button>
                        {/* </NavLink> */}

                        {/* Profile Dropdown */}
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative hidden sm:flex rounded-full bg-gray-800 text-sm ring-2 ring-gray-400 focus:outline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    onClick={() => setOpenProfileDropDown(!openProfieDropdown)}
                                >
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            {openProfieDropdown && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <NavLink to="/userAccount" className="block px-4 py-2 text-sm text-gray-700">
                                        Your Profile
                                    </NavLink>
                                    <NavLink to="/userAccount/settings" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </NavLink>
                                    <NavLink to="/checkOut" className="block px-4 py-2 text-sm text-gray-700">
                                        CheckOut
                                    </NavLink>
                                    <NavLink to="userAccount/signout" className="block px-4 py-2 text-sm text-gray-700">
                                        Sign out
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

            {/* Overlay for Drawer */}
            {openMobileMenu && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-10 z-40"
                        onClick={closeMenu} // Close menu when clicking outside
                    />
                    {/* Mobile Menu */}
                    <div className={`fixed  top-0 left-0 w-64 h-full bg-white shadow-lg cursor-pointer transform ${openMobileMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-linear z-50`}
                        onClick={(e) => e.stopPropagation()}
                    >


                        {/* Drawer Header */}
                        <div className='flex justify-between items-center p-4'>
                            <h2 className='text-lg font-bold text-gray-dark'>Menu</h2>
                            <RxCross1 className='cursor-pointer active:buttonBlackHover' onClick={() => setOpenMobileMenu(false)} />
                        </div>

                        {/* Search bar */}
                        <form className="flex items-center max-w-md mx-auto">
                            <label htmlFor="voice-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative w-full px-5">
                                <div className="absolute inset-y-0 left-5 flex items-center pl-3 pointer-events-none">
                                    <FaSearch />
                                </div>
                                <input
                                    type="text"
                                    id="voice-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-primary focus:border-blue-500 block w-full pl-10 p-2.5"
                                    placeholder="Search Your Favorite Products..."
                                    required
                                />

                            </div>

                        </form>




                        {/* Menu Items  */}
                        <ul className='text-black text-sm font-thin p-4'>

                            <li className='p-2 hover:bg-gray-50 flex items-center flex-1 hover:text-indigo-600'> <span className='text-xl'><IoHomeOutline /></span><NavLink to="/" className="rounded-lg px-3 py-2 text-sm text-gray-dark font-medium  hover:text-gray-dafault">Home</NavLink></li>
                            <li className='p-2 hover:bg-gray-50 flex items-center flex-1 hover:text-indigo-600 relative group'> <span className='text-xl'><FiShoppingBag /></span><NavLink to="/product" className="rounded-lg px-3 py-2 text-sm text-gray-dark font-medium  hover:text-gray-light">Products</NavLink>
                                {/* Dropdown Menu for categories in Mobile */}
                                <div className="absolute left-20 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="py-1">
                                        <NavLink to="/products/categories" className="block px-4 py-1 font-semibold hover:text-gray-light text-xs font-sans hover:border-b-2 hover:border-b-primary text-gray-dark" role="menuitem" id="menu-item-0">
                                            All
                                        </NavLink>
                                        <NavLink to="/products/hello" className="block px-4 py-1 font-semibold hover:text-gray-light text-xs font-sans hover:border-b-2 hover:border-b-primary text-gray-dark" role="menuitem" id="menu-item-1">
                                            Hello
                                        </NavLink>
                                        <NavLink to="/products/mens" className="block px-4 py-1 font-semibold hover:text-gray-light text-xs font-sans hover:border-b-2 hover:border-b-primary text-gray-dark" role="menuitem" id="menu-item-2">
                                            Mens
                                        </NavLink>
                                        <NavLink to="/products/womens" className="block px-4 py-1 font-semibold hover:text-gray-light text-xs font-sans hover:border-b-2 hover:border-b-primary text-gray-dark" role="menuitem" id="menu-item-2">
                                            Womens
                                        </NavLink>

                                    </div>
                                </div>

                            </li>
                            <li className='p-2 hover:bg-gray-50 flex items-center flex-1 hover:text-indigo-600'> <span className='text-xl'><FiUser /></span><NavLink to="/about" className="rounded-lg px-3 py-2 text-sm text-gray-dark font-medium  hover:text-gray-light">About</NavLink></li>
                        </ul>


                        {/* cart */}
                        <div className='p-4'
                            onClick={() => dispatch(cardSlider())}
                        >
                            <p className='font-semibold text-xs text-gray-default'>Cart</p>
                            <div>
                                <li className='p-2 hover:bg-gray-50 flex items-center flex-1 hover:text-indigo-600'> <span className='text-xl'><IoBagOutline /></span><p className="rounded-lg px-3 py-2 text-sm font-medium text-gray-dark ">Shopping Bag</p></li>
                            </div>
                        </div>

                        {/* Profile */}
                        <div className="absolute bottom-5 ml-3">
                            <div className='flex items-center gap-3'>
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 text-sm ring-2 ring-gray-400 focus:outline focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    onClick={() => setOpenProfileDropDownMobile(!openProfieDropdownMobile)}
                                >
                                    <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                                <span className='font-bold text-gray-dark text-xs'>Tom Cook</span>
                            </div>

                            {/* Profile dropdown */}
                            {openProfieDropdownMobile && (
                                <div className="absolute bottom-0 left-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <NavLink to="/userAccount" className="block px-4 py-2 text-sm text-gray-dark">
                                        Your Profile
                                    </NavLink>
                                    <NavLink to="/userAccount/settings" className="block px-4 py-2 text-sm text-gray-dark">
                                        Settings
                                    </NavLink>
                                    <NavLink to="/userAccount/signout" className="block px-4 py-2 text-sm text-gray-dark">
                                        Sign out
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>

                </>
            )}
        </nav>
    );
}
