import React from "react";
import {
    About,
    Contact,
    Home,
    Services,
    Blogs,
    SingleBlog,
    ShowBlog,
} from "../Pages";
import { Routes, Route } from "react-router-dom";

const RouteComponents = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path=":blogid" element={<SingleBlog />}></Route>
                </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/blogs" element={<Blogs />}>
                    <Route path=":blogid" element={<SingleBlog />}></Route>
                </Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/showblog" element={<ShowBlog />}></Route>
            </Routes>
        </div>
    );
};

export default RouteComponents;
