import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Container } from "react-bootstrap/lib/Tab";

ReactDOM.render(
    <div>
        <Header LastModifiedDate = {new Date()}/>
        <Body />
    </div>,
    document.getElementById("container")
);