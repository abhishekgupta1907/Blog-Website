import "./App.css";
import React from "react";
import RouteComponents from "Routes/RouteComponents";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
function App() {
    return (
        <>
            <NavBar />
            <RouteComponents />
            <Footer />
        </>
    );
}

export default App;
