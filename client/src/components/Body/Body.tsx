import * as React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { ArchiveView } from "../../model/Views/Archive/ArchiveView";
import { OverView } from "../../model/Views/OverView/OverView";

export class Body extends React.Component {
    CrmViews = [
        ArchiveView, OverView
    ]
    render() {  
        return <Tabs style={bodyStyle} defaultActiveKey={1} id="bodyTabControl">
                    {this.CrmViews.map((CrmView, i) => {     
                        console.log("Added");                  
                        return ( <Tab key={i} eventKey={i+1} title={i}>
                            <CrmView />
                        </Tab>) 
                    })}
                </Tabs>
    }
}

const bodyStyle={
    width: "100%"
}
