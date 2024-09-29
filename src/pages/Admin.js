import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Admin extends Component {
    render() {
        return (
            <div className="adminPage">
                <Navigation />
                <div className="adminContainer">
                    <h1 className="title">Admin Page</h1>
                    <p>This is the Admin page.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Admin;