import React, { Component } from 'react';

export default class extends Component {
    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            { id: 1, brand: "Puma", price: 550, site: { platform: "Flipkart" }, photo: "https://picsum.photos/id/1010/60" },
            { id: 2, brand: "Logo", price: 450, site: { platform: "Snapdeal" }, photo: "https://picsum.photos/id/1011/60" },
            { id: 3, brand: "Adidas", price: 950, site: { platform: "Amazon" }, photo: "https://picsum.photos/id/1012/60" },
            { id: 4, brand: "Wrangler", price: "", site: { platform: "Paytm" }, photo: "https://picsum.photos/id/1013/60" },
            { id: 5, brand: "Nike", price: null, site: { platform: "SmartDeal" }, photo: "https://picsum.photos/id/1014/60" },
        ]
    }
    onRefresh = () => {
        this.setState({
            customersCount: 7,
        })
        console.log("Refresh button clicked");
    }
    render() {
        const row_names = this.state.customers.map((customer) => {
            return (
                <>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td>{customer.brand}</td>
                        {/* <td style={{ backgroundColor: (customer.brand.startsWith('S')) ? 'green' : 'red' }}>{customer.brand}</td> */}
                        <td><img src={customer.photo} alt="pic" /></td>
                        {/* <td>$ {(customer.price == "" || customer.price == null) ? "sold out" : customer.price}</td> */}
                        <td>${customer.price ? (customer.price) : (<div className="bg-warning p-2 text-center">Sold out</div>)} </td>
                        <td>{customer.site.platform}</td>
                    </tr>

                </>

            )
        })
        return (
            <>
                <h4>Hello {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.customersCount}</span>
                </h4>
                <button className="btn btn-success" onClick={this.onRefresh}>Refresh</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Brand Image</th>
                            <th>Price</th>
                            <th>Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row_names}
                    </tbody>
                </table>
            </>
        )
    }
}