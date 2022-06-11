import React, { Component } from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {
    //excutes when component is mounted
    constructor() {
        //initialization of the state
        //console.log("Constructor method executed");
        super();// we have to call super class contructor (Component) if we doesn' call super this keyword gigves error
        this.state = {
            products: [],
            /* products: [
                 { id: 1, productName: "Iphone", price: 80000, quantity: 0, photo: "https://picsum.photos/id/1020/1300" },
                 { id: 2, productName: "Sony Camera", price: 5000, quantity: 0, photo: "https://picsum.photos/id/1021/1300" },
                 { id: 3, productName: "Samsung Laptop", price: 40000, quantity: 0, photo: "https://picsum.photos/id/1022/1300" },
                 { id: 4, productName: "Ipad", price: 20000, quantity: 0, photo: "https://picsum.photos/id/1023/1300" },
                 { id: 5, productName: "Dell Monitor", price: 50000, quantity: 0, photo: "https://picsum.photos/id/1024/1300" },
                 { id: 6, productName: "Reconnect", price: 10000, quantity: 0, photo: "https://picsum.photos/id/1025/1300" },
             ],*/

        }
    }

    // //executes after constructor and render method(inlcudes life cycle of child components if any) of current component
    componentDidMount = async () => {
        console.log("component did mount method executed");
        //fetch data from datasource
        var response = await fetch("http://localhost:3000/products", { method: "GET" })
        console.log(response);
        var s = await response.json()
        console.log(s)
        this.setState({ products: s })
        /* promise.then((response) => {
             console.log(response)
             var promise1 = response.json();
             promise1.then((prods) => {
                 this.setState({ products: prods })  we dont use to write then simple await and assign a variable
                 console.log(prods)
             })
     
     
         }) as this is a complex things to write nested promises we use async and await conectps*/

    }
    // //executes if there is anhy change
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("component did update method executed", prevProps, prevState, this.props, this.state);
    // }
    // //to unmount the component
    // componentWillUnmount() {
    //     console.log("Component will unmount called")
    // }

    // //to catch errror when any incorrect code
    // componentDidCatch(error, info) {
    //     console.log("Component did catch")
    //     localStorage.lastError = `${error}/${JSON.stringify(info)}`
    // }

    handleIncrement = (prod, maxValue) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(prod)
        //console.log(index)
        //console.log(allProducts[index])
        if (allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++
            this.setState({
                products: allProducts
            })
        }
        console.log("Increment", prod);
    }
    handleDecrement = (prod, minValue) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(prod)
        //console.log(index)
        //console.log(allProducts[index])
        if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--
            this.setState({
                products: allProducts
            })
        }
        console.log("Decrement", prod);
    }

    handleDelete = (prod) => {
        let allProducts = [...this.state.products]
        let index = allProducts.indexOf(prod)
        //console.log(index)
        //console.log(allProducts[index])
        if (window.confirm("Are you sure u want to delete?")) {
            allProducts.splice(index, 1)
            this.setState({
                products: allProducts
            })
        }

        console.log("Delete", prod);
    }
    render() {
        console.log("render method executed");
        return (
            <>

                <h1>Shopping Cart</h1>
                <div className="container grid grid-three-column portofolio-images">

                    {this.state.products.map((prod) => {
                        return <Product key={prod.id} prods={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                            {/* return <Product key={prod.id} id={prod.id} productName={prod.productName} price={prod.price} quantity={prod.quantity} photo={prod.photo} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}> */}

                            <button className="btn btn-primary">Buy Product</button>
                        </Product>
                    })}
                </div>



            </>
        )
    }
}