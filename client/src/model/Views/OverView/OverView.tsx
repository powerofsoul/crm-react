import * as React from "react";
import { CrmView, CrmComponent } from "../../Crm";
import { OverViewSideMenu } from "./OverViewsideMenu";
import { OverViewContent } from "./OverViewContent";

export class OverView extends CrmComponent{
    constructor(...props:[]) {
        super(OverViewSideMenu, OverViewSideMenu, 'OverView',  ...props);
    }

    render(){
        return super.render();
    }
}