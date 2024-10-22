import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Admin = () => {

    return (
        <div className="adminPage">
            <Navigation/>
            <div className="adminContainer">
                <h1>Admin Page</h1>
            </div>
            <Footer />
        </div>
    );
};

export default Admin;
