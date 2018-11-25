import * as React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { BodyProps } from "./BodyProps";

export class Body extends React.Component<BodyProps> {
    render() {  
        return <Tabs style={bodyStyle} activeKey={this.props.SelectedTab} id="mainTabControl">
                    {this.props.CrmViews.map((CrmView, i) => {     
                        return ( <Tab key={i} eventKey={i}>
                            <CrmView />
                        </Tab>) 
                    })}
                </Tabs>
    }
}

const bodyStyle={
    width: "100%"
}
