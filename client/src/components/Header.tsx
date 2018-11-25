import * as React from "react";
import { Grid, Row, Col, Button } from 'react-bootstrap';

export interface HeaderProps {
    LastModifiedDate: Date
}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return  <Grid style={headerStyle}>
            <Row>
                <Col xs={3}>
                    <label>Last Updated:</label>
                    <div>{this.props.LastModifiedDate.toLocaleDateString("en-US") + " " + this.props.LastModifiedDate.toLocaleTimeString()}</div>
                </Col>
                <Col xs={6}>
                    <label>Viewing</label>
                    <div>
                        <Button style={buttonStyle}>CRM</Button>
                        <Button style={buttonStyle}>Overview</Button>
                        <Button style={buttonStyle}>Archive</Button>
                    </div>
                </Col>
                <Col style={{position:"relative", bottom:0}} xs={3}>
                    <div className="pull-right">
                        <Button style={buttonStyle} className="btn btn-success">Add Entry</Button>
                        <Button style={buttonStyle} className="btn btn-success">Add Multiple Entries</Button>
                    </div>
                </Col>
            </Row>        
        </Grid>
    }
}

const headerStyle = {
    width: "100%",
    minHeight:"20%",
    borderBottom: "solid 2px",
    padding:"20px"
}

const buttonStyle = {
    marginRight:"10px"
}