import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="bg-[#262626] text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800 overflow-x-hidden">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-[90vw]">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-3xl font-extrabold text-purple-400">
                                GharPadharo
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Where every stay , feels like home
                            <br />
                            At Gharpadharo, we're dedicated to revolutionizing the room rental experience. We strive to create a transparent, efficient, and trustworthy platform that connects property owners with the perfect tenants, making the entire process seamless and enjoyable for everyone involved.
                        </p>
                        <div className="flex space-x-5 pt-2">
                            <a
                                href="https://www.instagram.com/ghar_padharo?igsh=MWt0OWJ6b2RqYWs1ag=="
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-square-instagram text-[30px]"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gharpadharo/"
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-linkedin text-[30px]"></i>
                            </a>
                            <a
                                href="https://youtube.com/@gharpadharo?si=nakRG1Oj9_AVk9tf"
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-youtube text-[30px]"></i>
                            </a>
                        </div>
                    </div>

                    { }
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#events"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Image Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#upcoming-events"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Upcoming Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#joinUs"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple00 transition-colors duration-300"
                                >
                                    Join Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Our USPs
                        </h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                India's first room-finding portal based on real-time data.
                            </li>
                            <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                No brokerage or client charges.
                            </li>
                            <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                Free verification of fake profiles.
                            </li>
                            <li className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                Aiming to build a system that easily provides real-time details about PGs, hostels, and flats.
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Contact Us
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            <i className="fa-solid fa-location-dot pr-2"></i>
                            Gharpadharo HQ, Nanda Ki Chowki-Premnagar, Dehradun,
                            Uttarakhand, India
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <a href="tel:+917903266907">
                                <i className="fa-solid fa-phone-volume"></i> +91 7903266907
                            </a>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            <a href="mailto:gharpadharo@gmail.com">
                                <i className="fa-regular fa-envelope pr-2"></i> gharpadharo@gmail.com
                            </a>
                        </p>

                        {/* <p>Phone</p>
            <div className="flex flex-col text-gray-600 dark:text-gray-300 text-[14px]">
              <a href="tel:+917720803593">+91 77208 03593</a>
              <a href="tel:+917517246260">+91 75172 46260</a>
            </div> */}
                    </div>
                </div>

                { }
                <div className="text-center text-gray-500 dark:text-gray-400 text-sm pt-10 mt-10 border-t border-gray-200 dark:border-gray-700">
                    <p>Made with ❤️ by gharpadharo</p>
                    <p>
                        &copy; {new Date().getFullYear()} All rights reserved Zestos ventures Pvt.Ltd.
                    </p>
                    {/* <p className="mt-1">Designed with <span className="text-red-500">&hearts;</span> by Your Company</p> */}
                </div>
            </footer>
        </>
    );
};

export default Footer;