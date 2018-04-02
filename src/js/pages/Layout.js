import React from "react";
import { Link } from "react-router";

import Footer from "../compnents/layout/Footer";
import Nav from "../compnents/layout/Nav";

export default class Layout extends React.Component {
    render() {
        const { location } = this.props;
        const containerSyle = {
            marginTop: "60px"
        };
        return (
            <div>
                <Nav location={location} />

                <div class ="container" style={containerSyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>KillerNews.net</h1>
                            {this.props.children}
                        </div>        
                    </div>        
                <Footer />
                </div>
            </div>
        );
    }
}

