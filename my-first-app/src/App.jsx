import React, { Component } from 'react';
import { NavBar } from './NavBar';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import CustomerList from './CustomerList';
import { Dashboard } from './Dashboard';
import NoMatchPage from './NoMatchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <>

                <BrowserRouter>
                    <NavBar />
                    <Routes>


                        {/* <Dashboard /> */}
                        <Route path="/" exact element={<Login />} >Login</Route>
                        <Route path="/dashboard" exact element={<Dashboard />} />
                        <Route path="/cart" exact element={<ShoppingCart />} />
                        <Route path="/customers" exact element={<CustomerList />} />
                        <Route path="*" exact element={<NoMatchPage />} />
                        {/* <ShoppingCart /> */}

                    </Routes>
                </BrowserRouter>
            </>

        )
    }
}
export default App;