import React, { Component } from 'react';


export default class Loginb extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }

    handleChange = () => {
        console.log(this.state)
        if (this.state.email === "admin@gmail.com" && this.state.password === "admin") {
            this.setState({
                message: "Successfully Logged in"

            })

        }
        else {
            this.setState({
                message: "Invalid Credentials"

            })

        }
    }
    render() {
        return (
            <>
                <div className="col-lg-9">
                    <h1 className="m-2 p-2 border-bottom">Login Component</h1>

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
            </>
        )
    }
}