import React, { Component } from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {
    state = {
        products: [
            { id: 1, productName: "Iphone", price: 80000, quantity: 100, photo: "https://picsum.photos/id/1020/1300" },
            { id: 2, productName: "Sony Camera", price: 5000, quantity: 200, photo: "https://picsum.photos/id/1021/1300" },
            { id: 3, productName: "Samsung Laptop", price: 40000, quantity: 300, photo: "https://picsum.photos/id/1022/1300" },
            { id: 4, productName: "Ipad", price: 20000, quantity: 400, photo: "https://picsum.photos/id/1023/1300" },
            { id: 5, productName: "Dell Monitor", price: 50000, quantity: 500, photo: "https://picsum.photos/id/1024/1300" },
            { id: 6, productName: "Reconnect", price: 10000, quantity: 130000, photo: "https://picsum.photos/id/1025/1300" },
        ]
    }
    render() {
        return (
            <>
                <div className="container-fluid">
                    <h1>Shopping Cart</h1>
                    <div className="row">
                        {this.state.products.map((prod) => {
                            return <Product key={prod.id} id={prod.id} productName={prod.productName} price={prod.price} quantity={prod.quantity} photo={prod.photo}>
                                <button className="btn btn-primary">Buy Product</button>
                            </Product>
                        })}
                    </div>
                </div>

            </>
        )
    }
}