import React, { Component } from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {
    state = {
        products: [
            { id: 1, productName: "Iphone", price: 80000, quantity: 0, photo: "https://picsum.photos/id/1020/1300" },
            { id: 2, productName: "Sony Camera", price: 5000, quantity: 0, photo: "https://picsum.photos/id/1021/1300" },
            { id: 3, productName: "Samsung Laptop", price: 40000, quantity: 0, photo: "https://picsum.photos/id/1022/1300" },
            { id: 4, productName: "Ipad", price: 20000, quantity: 0, photo: "https://picsum.photos/id/1023/1300" },
            { id: 5, productName: "Dell Monitor", price: 50000, quantity: 0, photo: "https://picsum.photos/id/1024/1300" },
            { id: 6, productName: "Reconnect", price: 10000, quantity: 0, photo: "https://picsum.photos/id/1025/1300" },
        ],

    }

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
        return (
            <>
                <div className="container-fluid">
                    <h1>Shopping Cart</h1>
                    <div className="row">
                        {this.state.products.map((prod) => {
                            // return <Product key={prod.id} id={prod.id} productName={prod.productName} price={prod.price} quantity={prod.quantity} photo={prod.photo} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}>
                            return <Product key={prod.id} prods={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                                <button className="btn btn-primary">Buy Product</button>
                            </Product>
                        })}
                    </div>

                </div>


            </>
        )
    }
}