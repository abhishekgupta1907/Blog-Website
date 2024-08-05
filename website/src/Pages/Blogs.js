import BlogPage from "Components/BlogPage";
import React from "react";

export const Blogs = () => {
    return (
        <div className="">
            <div className=" py-40 bg-blue-300 text-center text-white px-4">
                <h2 className="text-white text-center text-5xl lg:7xl leading-snug font-bold mb-5">
                    Blog Page{" "}
                </h2>
            </div>
            {/* All blogs container */}
            <div className="max-w-7xl mx-auto">
                <BlogPage />
            </div>
        </div>
    );
};
