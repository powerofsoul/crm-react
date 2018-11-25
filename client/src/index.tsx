import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header";

class Syncronyzer {
    LastModifiedDate = new Date();
    RefreshRate:number;

    constructor(refreshRate:number){
        this.RefreshRate = refreshRate;
    }

    public start() {
        setTimeout(() => {
           this.LastModifiedDate = new Date();
           this.start();
        }, this.RefreshRate);
    }
}

var sync = new Syncronyzer(100);
sync.start();

ReactDOM.render(
    <Header LastModifiedDate = {sync.LastModifiedDate}/>,
    document.getElementById("container")
);