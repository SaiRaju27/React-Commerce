import React, { Component } from 'react';
import "./index.css";

export default class Product extends Component {
    render(props) {
        console.log(this.props);
        return (
            <>
                <div className="col-lg-6">
                    <div className="card text-muted" style={{ width: '18rem' }}>#{this.props.id}
                        <img src={this.props.photo} className="card-img-top" alt="..." />
                        <div className=" card m-2 card-body">
                            <h5 className="card-title"> {this.props.productName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text">$ {this.props.price}</p>
                            <p className="card-text">Available {this.props.quantity}</p>
                        </div>
                        <div className="card-footer text-right">
                            {this.props.children}
                        </div>
                    </div>
                    {/* card body ends here */}

                </div>

            </>
        )
    }
}