import * as React from "react";
import { CrmView, CrmComponent } from "../../Crm";
import { OverViewSideMenu } from "./OverViewsideMenu";
import { OverViewContent } from "./OverViewContent";

export class OverView extends CrmComponent{
    constructor(...props:[]) {
        super(OverViewSideMenu, OverViewContent,  ...props);
    }

    render(){
        return super.render();
    }
}