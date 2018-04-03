import React, { Component } from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map((title, i) => <Article key={i} title={title}/> );

        const adText = [
            "Add spot #1",
            "Add spot #2",
            "Add spot #3",
            "Add spot #4",
            "Add spot #5",
        ];

        const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
        
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                        {randomAd}
                        </div>
                    </div>
                </div>

                <div class="row">{Articles}</div>
            </div>
        );
    }
}
