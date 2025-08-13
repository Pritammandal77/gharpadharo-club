import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer className="bg-[#262626] text-gray-900 dark:text-white py-12 px-4 font-inter border-t border-gray-200 dark:border-gray-800">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:w-[90vw]">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <h3 className="text-3xl font-extrabold text-purple-400">
                                GharPadharo
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Where every stay , feels like home
                        </p>
                        <div className="flex space-x-5 pt-2">
                            <a
                                href="https://www.instagram.com/tech_banao?igsh=cmo1OWcyNGI0bWM="
                                target="_blank"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-square-instagram text-[30px]"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-square-x-twitter text-[30px]"></i>
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-500 transition-transform transform hover:scale-110"
                            >
                                <i className="fa-brands fa-linkedin text-[30px]"></i>
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
                                    href="#aboutus"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#worksamples"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"
                                >
                                    Work Samples
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contactus"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple00 transition-colors duration-300"
                                >
                                    Connect
                                </a>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            <li onClick={() => nav(`webdev`)}>
                                <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                    Website Development
                                </a>
                            </li>
                            <li onClick={() => nav(`uiux`)}>
                                <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                    UI/UX Design
                                </a>
                            </li>
                            <li onClick={() => nav(`seo`)}>
                                <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                    SEO optimization
                                </a>
                            </li>
                            <li onClick={() => nav(`support`)}>
                                <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300">
                                    Website Maintainance
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-500 transition-colors duration-300"></a>
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
                            <a href="mailto:gharpadharo@gmail.com">
                                <i className="fa-regular fa-envelope pr-2"></i> thetechbanao@gmail.com
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