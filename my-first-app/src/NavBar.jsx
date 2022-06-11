import React, { Component } from "react";
import "./index.css";
import pic from './logo.jpg';
import { Link } from 'react-router-dom';
export class NavBar extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <img src={pic} alt="main pic" className="logo" />
                    <nav className="navbar">
                        <ul className="navbar-lists">
                            <li>
                                <Link to="/" className="navbar-link home-link" >Login</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="navbar-link about-link" >DashBoard</Link>
                            </li>
                            <li>
                                <Link to="/cart" className="navbar-link services-link" >Shopping Cart</Link>
                            </li>
                            <li>
                                <Link to="/customers" className="navbar-link portofolio-link" >Customers List</Link>
                            </li>
                        </ul>

                    </nav>
                </header>


            </>
        )

    }
}