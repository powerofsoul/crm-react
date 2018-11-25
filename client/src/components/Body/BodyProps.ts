import { CrmComponent } from "../../model/Crm";

export interface BodyProps{
    CrmViews : (typeof CrmComponent)[],
    SelectedTab : number
}