import React, { Component } from 'react';
import "./index.css";

export default class Product extends Component {
    constructor(props) {
        // console.log("constructor called-product component")
        super(props);
        this.state = {
            products: this.props.prods
        }
    }
    // componentDidMount() {
    //     console.log("Component did mount called-product compoent")
    // }

    // componentDidUpdate() {
    //     console.log("Component did update called-product component");
    // }

    // componentWillUnmount() {
    //     console.log("Component will unmount called-product component")
    // }
    render(props) {
        console.log("render method called-product component");
        // console.log(this.props);
        return (
            <>

                <div className=" text-muted" style={{ width: '18rem' }}>#{this.state.products.id}
                    <span className="pull-right hand-icon" onClick={() => { this.props.onDelete(this.state.products) }}>
                        Delete <i className="fa fa-times"></i>
                    </span>


                    <div className="img-overlay p-btn--1">
                        <img src={this.state.products.photo} className="card" alt="..." width="350px" height="250px" />
                        <div className="overlay">
                            <a href="/#" class="common-heading">Project 1</a>

                        </div>
                    </div>

                    <div className=" card m-2 card-body">
                        <h5 className="card-title"> {this.state.products.productName}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">$ {this.state.products.price}</p>
                        <p className="card-text">Available {this.state.products.quantity}</p>
                    </div>
                    <div className="card-footer">
                        <div className="float-left">
                            <div className="btn-group">
                                <button className="btn p-btn" onClick={() => { this.props.onIncrement(this.state.products, 5) }}>+</button>
                                {' '}
                                {' '}
                                <button className="btn p-btn" onClick={() => { this.props.onDecrement(this.state.products, 0) }}>-</button>
                            </div>
                        </div>
                        {' '}
                        {' '}
                        <div className="float-right">{this.props.children}</div>
                    </div>
                </div>
                {/* card body ends here */}



            </>
        )
    }
}