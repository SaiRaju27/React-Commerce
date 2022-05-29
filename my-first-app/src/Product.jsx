import React, { Component } from 'react';
import "./index.css";

export default class Product extends Component {
    render(props) {
        console.log(this.props);
        return (
            <>
                <div>
                    <div className="text-muted">#{this.props.id}
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={this.props.photo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {this.props.productName}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">$ {this.props.price}</p>
                                <p className="card-text">Available {this.props.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}