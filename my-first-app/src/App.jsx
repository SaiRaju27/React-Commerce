import React, { Component } from 'react';
import { NavBar } from './NavBar';
// import ShoppingCart from './ShoppingCart';
import Login from './Login';
class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Login />
                {/* <ShoppingCart /> */}
            </>

        )
    }
}
export default App;