import React, { Component } from 'react';
import { NavBar } from './NavBar';
import ShoppingCart from './ShoppingCart';
class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ShoppingCart />
            </>

        )
    }
}
export default App;