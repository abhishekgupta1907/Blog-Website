import "./App.css";
import React from "react";
import RouteComponents from "Routes/RouteComponents";
import NavBar from "Components/NavBar";
function App() {
    return (
        <>
            <NavBar />
            <RouteComponents />
        </>
    );
}

export default App;
