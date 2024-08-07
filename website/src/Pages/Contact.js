import React from "react";

export const Contact = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-100">
                <h1 className="mb-4 text-4xl font-bold text-gray-900">
                    Contact Us
                </h1>
                <p className="mb-6 text-lg text-gray-600">
                    We'd love to hear from you! Please fill out the form below.
                </p>
                <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="name"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required=""
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                            required=""
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
