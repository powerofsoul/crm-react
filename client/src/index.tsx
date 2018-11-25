import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { ArchiveView } from "./model/Views/Archive/ArchiveView";
import { OverView } from "./model/Views/OverView/OverView";

var CrmViews = [
    ArchiveView, OverView
]
var CrmViewsName = [
    "Archive", "Overview"
]

var SelectedTab = 0;

ReactDOM.render(
    <div>
        <Header CrmViewsName={CrmViewsName} LastModifiedDate = {new Date()}/>
        <Body  SelectedTab = {SelectedTab}  CrmViews={CrmViews} />
    </div>,
    document.getElementById("container")
);