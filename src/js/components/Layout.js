import React, { Component } from "react";

import Footer from './Footer'
import Header from './Header'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "Welcome" };
    }

    render() {

        setTimeout(() => {
            this.setState({title: "Welcome Brandon"});
        }, 2000);
        return (
            <div>
                <Header title={this.state.title} status={'OK'} />
                <Footer />
            </div>
        );
    }
}

