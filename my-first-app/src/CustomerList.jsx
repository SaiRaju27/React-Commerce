import React, { Component } from 'react';

export default class CustomerList extends Component {
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

    // onRefresh = () => {
    //     this.setState({
    //         customersCount: 7,
    //     })
    //     console.log("Refresh button clicked");
    // }onRefresh of button click

    // customColor = (brand) => {
    //     if (brand.startsWith("N")) {
    //         return {
    //             backgroundColor: "Red",
    //         }
    //     }
    //     else return {}
    // } for styles using css for particular field

    //executes when the user clicks on the change picture button
    changePicture = (cust, index) => {
        console.log(cust);
        console.log(index);
        // get exissting cutomers
        var custs = this.state.customers
        custs[index].photo = "https://picsum.photos/id/1014/60";
        //updates the customers state in array
        this.setState({
            customers: custs,
        })
    }

    render() {
        const row_names = this.state.customers.map((customer, index) => {
            return (
                <>
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td><img src={customer.photo} alt="pic" />
                            <div> <button className="btn btn-sm btn-secondary" onClick={() => {
                                this.changePicture(customer, index)
                            }}>Change Picture</button></div>
                        </td>
                        <td>{customer.brand}</td>
                        {/* <td style={this.customColor(customer.brand)}>{customer.brand}</td> */}
                        {/* <td style={{ backgroundColor: (customer.brand.startsWith('S')) ? 'green' : 'red' }}>{customer.brand}</td> */}
                        {/* <td>$ {(customer.price == "" || customer.price == null) ? "sold out" : customer.price}</td> */}
                        <td>${customer.price ? (customer.price) : (<div className="bg-warning p-2 text-center">Sold out</div>)} </td>
                        <td>{customer.site.platform}</td>
                    </tr>

                </>

            )
        })
        return (
            <>
                {/* <h4>Hello {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.customersCount}</span>
                </h4>
                <button className="btn btn-success" onClick={this.onRefresh}>Refresh</button> */}

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