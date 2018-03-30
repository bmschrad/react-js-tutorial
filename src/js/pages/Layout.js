import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
    navigate(){
        this.props.history.pushState(null,"/");
    }

    render() {
        const { history } = this.props;
        console.log(history.isActive("archives"));
        return (
            <div>
                {this.props.children}
                <h1>KillerNews.net</h1>
                <Link to="archives" activeClassName="test" class="btn btn-danger">archives</Link>
                <Link to="settings" class="btn btn-success">settings</Link>
                <button onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
}

