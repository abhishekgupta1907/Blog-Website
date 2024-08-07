import React from "react";

export const About = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-50 dark:bg-gray-900 mt-20">
                <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    About Us
                </h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center max-w-2xl">
                    We are a team of passionate individuals dedicated to making
                    a difference in the world through technology and innovation.
                    Our mission is to empower businesses and individuals to
                    reach their full potential.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Vision
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            To be a leader in the technology industry, providing
                            innovative solutions that drive growth and success
                            for our clients.
                        </p>
                    </div>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Values
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Integrity, Innovation, Collaboration, and Excellence
                            are at the core of everything we do.
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <a
                        href="\"
                        className="inline-flex items-center  text-decoration-none justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Join Us
                    </a>
                </div>
            </div>
        </div>
    );
};
