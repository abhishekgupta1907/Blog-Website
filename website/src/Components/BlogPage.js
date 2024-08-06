import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; //Blogs per page
    const [selectedcategory, setSelectectedcategory] = useState(null);
    const [activeCategaory, setAtiveCategaory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
            // filter by category
            if (selectedcategory) {
                url += `&category=${selectedcategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageSize, selectedcategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // console.log(blogs);

    const handleCategoryChange = (category) => {
        setSelectectedcategory(category);
        setCurrentPage(1);
        setAtiveCategaory(category);
    };
    return (
        <div>
            {/* Category section */}
            <div>
                <CategorySelection
                    onSelectCategory={handleCategoryChange}
                    selectedcategory={selectedcategory}
                    activeCategaory={activeCategaory}
                />
            </div>
            {/* Blogcards section */}
            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedcategory={selectedcategory}
                    pageSize={pageSize}
                />
                {/* Sidebar Component */}
                <div>
                    <SideBar />
                </div>
            </div>
            {/* Pagination section */}
            <div>
                <Pagination
                    onPagechange={handlePageChange}
                    currentPage={currentPage}
                    blogs={blogs}
                    pageSize={pageSize}
                />
            </div>
        </div>
    );
};

export default BlogPage;
