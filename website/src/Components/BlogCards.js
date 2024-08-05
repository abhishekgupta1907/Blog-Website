import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
const BlogCards = (blogs) => {
    const filteredBlogs = blogs;
    console.log(filteredBlogs);
    return (
        <div>
            {filteredBlogs &&
            filteredBlogs?.blogs &&
            filteredBlogs?.blogs.length !== 0 ? (
                filteredBlogs?.blogs.map((item) => (
                    <Link key={item.id} className="text-decoration-none">
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
                        
                    </Link>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default BlogCards;
