import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const BlogCards = ({ blogs, currentPage, selectedcategory, pageSize }) => {
    const filteredBlogs = blogs
        .filter(
            (blogs) => !selectedcategory || blogs.category === selectedcategory
        )
        .slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return (
        <>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {filteredBlogs.map((item) => (
                    <Link
                        to={`/blogs/${item.id}`}
                        key={item.id}
                        state={filteredBlogs}
                        className="text-decoration-none p-5 shadow-lg rounded cursor-pointer"
                    >
                        <div>
                            <img src={item.image} alt="" className="w-full" />
                        </div>

                        <h5 className=" mt-4 mb-2 font-semibold hover:text-blue-950 cursor-pointer">
                            {item.title}
                        </h5>
                        <p className="mb-2 text-gray-500">
                            <FaUser className="inline-flex  items-center mr-2" />
                            {item.author}
                        </p>
                        <p className="text-sm text-gray-500">
                            Published:{item.published_date}
                        </p>
                    </Link>
                ))}
            </div>

            <Outlet />
        </>
    );
};

export default BlogCards;
