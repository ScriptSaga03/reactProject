import React from "react";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaPinterest,
    FaEnvelope,
    FaPaypal,
    FaApplePay,
    FaGooglePay
} from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-gray-200 w-full py-6  mt-10">
            <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className=" px-4 relative">
                    <div className="w-full mb-2 max-w-7xl bg-black text-white px-6 py-4 rounded-2xl absolute sm:-top-32 -top-36  left-1/2 transform -translate-x-1/2">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                            <h2 className="sm:text-lg text-md md:text-3xl font-bold text-center md:text-left max-w-sm">
                                STAY UP TO DATE ABOUT OUR LATEST OFFERS
                            </h2>
                            <div className="flex flex-col w-full md:w-auto gap-2">
                                <div className="relative w-full md:w-80">
                                    <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-white text-sm text-gray-700 rounded-full pl-12 pr-4 py-2 focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="bg-white text-sm text-black hover:text-white hover:bg-gray-800 w-full md:w-80 transition cursor-pointer font-semibold px-6 py-2 rounded-full">
                                    Subscribe to Newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Links Section */}
                <div className="py-16 mt-10 sm:mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 justify-between">
                        {/* Shop Info */}
                        <div className="col-span-2">
                            <h1 className="text-xl font-bold mb-4">Cartify</h1>
                            <p className="text-sm">
                                We have clothes that suit your style and which you're proud to
                                wear. From women to men.
                            </p>
                            <div className="flex space-x-4 mt-4 text-lg text-gray-600">
                                <FaTwitter className="hover:text-blue-400 transition  cursor-pointer" />
                                <FaFacebookF className="hover:text-blue-600 transition  cursor-pointer" />
                                <FaInstagram className="hover:text-pink-500 transition  cursor-pointer" />
                                <FaPinterest className="hover:text-red-600 transition  cursor-pointer" />
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-gray-dark transition  cursor-pointer ">About</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Features</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Works</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Career</li>
                            </ul>
                        </div>

                        {/* Help Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">HELP</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Customer Support
                                </li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Delivery Details
                                </li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Terms & Conditions
                                </li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Privacy Policy
                                </li>
                            </ul>
                        </div>

                        {/* FAQ Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Account</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Manage Deliveries
                                </li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Orders</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Payments</li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="hover:text-gray-dark transition  cursor-pointer ">Free eBooks</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    Development Tutorial
                                </li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">How-to Blog</li>
                                <li className="hover:text-gray-dark transition  cursor-pointer ">
                                    YouTube Playlist
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="py-4 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
                        {/* Copyright Text */}
                        <p className="text-center md:text-left text-gray-600">
                            Cartify © 2000-2023. All Rights Reserved
                        </p>

                        {/* Payment Icons */}
                        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                            {/* Visa */}
                            <div className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer transform transition-transform hover:-translate-y-1 hover:text-blue-600">
                                <RiVisaLine className="text-2xl" />
                            </div>

                            {/* PayPal */}
                            <div className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer transform transition-transform hover:-translate-y-1 hover:text-red-500">
                                <FaPaypal className="text-2xl" />
                            </div>

                            {/* Apple Pay */}
                            <div className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer transform transition-transform hover:-translate-y-1 hover:text-gray-500">
                                <FaApplePay className="text-3xl" />
                            </div>

                            {/* Google Pay */}
                            <div className="px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-lg cursor-pointer transform transition-transform hover:-translate-y-1 hover:text-indigo-500">
                                <FaGooglePay className="text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
