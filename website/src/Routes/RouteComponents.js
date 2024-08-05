import React from "react";
import { About, Contact, Home, Services, Blogs } from "../Pages";
import { Routes, Route } from "react-router-dom";

const RouteComponents = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
};

export default RouteComponents;
