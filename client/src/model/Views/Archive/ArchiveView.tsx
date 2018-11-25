import * as React from "react";
import { CrmView, CrmComponent } from "../../Crm";
import { ArchiveSideMenu } from "./ArchiveSideMenu";
import { ArchiveContent } from "./ArchiveContent";

export class ArchiveView extends CrmComponent{
    constructor(...props:[]) {
        super(ArchiveSideMenu, ArchiveSideMenu,  ...props);
    }

    render(){
        return super.render();
    }
}