import * as React from "react";
import { runInThisContext } from "vm";
import { Grid, Row, Col } from "react-bootstrap";

export interface CrmView{
    SideMenu: React.ComponentClass,
    Content: React.ComponentClass
}

export class CrmComponent extends React.Component implements CrmView{
    SideMenu: React.ComponentClass;
    Content: React.ComponentClass;

    constructor(sideMenu: React.ComponentClass, content: React.ComponentClass, ...props:[]) {
        super(props);
        this.SideMenu = sideMenu;
        this.Content = content;
    }

    render(){
        return <Grid>
                  <Row>
                        <Col xs={4} style={sideMenuStyle}>
                            <this.SideMenu />
                        </Col>
                        <Col xs={8} style={contentStyle}>
                            <this.Content />
                        </Col>
                    </Row>
                </Grid>
    }
}

const sideMenuStyle = {
    height: "500px",
    backgroundColor:"red"
}

const contentStyle = {
    height: "500px",
    backgroundColor:"blue"
}

export interface Crm{
    Views:[CrmView]
    ActiveView:CrmView;
}

export class MainPage implements Crm{
    Views: [CrmView];
    ActiveView: CrmView;

    constructor(...views:[CrmView]){
        this.Views = views;
        this.ActiveView = this.Views[0];
    }
}