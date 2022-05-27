import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from './App.jsx';
import "./index.css"

// var s = <h1 class="container"><button class="btn btn-success">React App</button></h1>
ReactDOM.render(<NavBar />, document.getElementById("root"));
// console.log(s);