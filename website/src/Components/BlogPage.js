import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import BlogCards from "./BlogCards";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchBlogs() {
            let url = "http://localhost:5000/blogs";
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    }, []);
    // console.log(blogs);
    return (
        <div>
            {/* Category section */}
            <div>Page Category</div>
            {/* Blogcards section */}
            <div>
                <BlogCards blogs={blogs} />
            </div>
            {/* Pagination section */}
            <div>PaginationItem</div>
        </div>
    );
};

export default BlogPage;
