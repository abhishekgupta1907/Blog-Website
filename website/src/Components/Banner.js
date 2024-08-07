import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="px-4 py-20 bg-blue-300 mx-auto">
            <div className=" text-center">
                <h1 className="text-white text-center text-5xl lg:7xl leading-snug font-bold mb-5 mt-2">
                    Welcome To Our Blog{" "}
                </h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
                    Start your Blog today and join a community of writters and
                    readers who are passionate about sharing their stories and
                    ideas. we offer everything you need to get started, from
                    helpful tips and tutorials
                </p>
                <div>
                    <Link
                        to="/"
                        className="text-decoration-none   font-medium hover:text-white inline-flex items-center  "
                    >
                        Learn more <FaArrowRight className="mt-1 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
