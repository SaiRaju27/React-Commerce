import React, { Component } from 'react';
import "./index.css"

export default class Loginb extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }

    handleChange = async () => {
        var response = await fetch(`http://localhost:3000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET" })
        console.log(response)
        var body = await response.json()
        console.log(body)
        // console.log(this.state)
        if (body.length > 0) {
            this.setState({
                message: "Successfully Logged in"

            })
        }
        else {
            this.setState({
                message: "Invalid Credentials"

            })

        }
        /* if (this.state.email === "admin@gmail.com" && this.state.password === "admin") {
             this.setState({
                 message: "Successfully Logged in"
 
             })
 
         }
         else {
             this.setState({
                 message: "Invalid Credentials"
 
             })
 
         }*/
    }
    render() {
        return (
            <>
                <div id="login">
                    <div className="col-g">
                        <h1 className="m-2 p-2 border-bottom">Login Component</h1>
                        <div className="container">
                            <div id="login-row" className="row justify-content-center align-items-center">
                                <div id="login-column" className="col-md-6">
                                    <div id="login-box" className="col-md-12">

                                        {/* Email starts */}
                                        <div className="form-group form-row">
                                            <label className="col-lg-4">Email:</label>
                                            <input type="email" className="form-control" value={this.state.email}
                                                onChange={(event) => {
                                                    this.setState({ email: event.target.value });
                                                    //console.log(this.state.email)
                                                }}></input>
                                        </div>
                                        {/* Email ends */}

                                        {/* Password starts */}
                                        <div className="form-group form-row">
                                            <label className="col-lg-4">Password:</label>
                                            <input type="password" className="form-control" value={this.state.password} onChange={(event) => {
                                                this.setState({ password: event.target.value });
                                                //console.log(this.state.password)
                                            }}></input>
                                        </div>
                                        {/* Password ends */}
                                        <div className="text-right">
                                            {this.state.message}
                                            <button className="btn btn-primary" onClick={this.handleChange}>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}