import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ViewTitle } from "react-admin";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import config from "../config.js";

class CustomStatus extends Component {
    render() {
        let status;
        let color = "red";
        switch (this.props.status) {
            case "2":
                color = "green";
                status = "Up";
                break;
            case "8":
                status = "Seems down";
                break;
            case "9":
                status = "Down";
                break;
            default:
                status = "--";
        }

        return <Avatar className={color}>{status}</Avatar>;
    }
}

class Monitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            monitors: []
        };
    }
    componentDidMount() {
        let that = this;
        var Client = require("uptime-robot");
        var cl = new Client(config.api_uptime);
        cl.getMonitors({ responseTimes: 1, responseTimesAverage: 1 }, function(
            err,
            res
        ) {
            if (err) throw err;
            console.log(res);
            that.setState({ monitors: res });
        });
    }
    render() {
        return (
            <div className="App">
                <Card>
                    <ViewTitle title="Monitors" />
                    <CardContent>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>URL</TableCell>
                                    <TableCell>Uptime</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.monitors.map(function(monitor) {
                                    return (
                                        <TableRow key={monitor.id}>
                                            <TableCell>
                                                {monitor.friendlyname}
                                            </TableCell>
                                            <TableCell>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={monitor.url}
                                                >
                                                    {monitor.url}
                                                </a>
                                            </TableCell>
                                            <TableCell numeric>
                                                {monitor.alltimeuptimeratio +
                                                    "%"}
                                            </TableCell>
                                            <TableCell>
                                                <CustomStatus
                                                    status={monitor.status}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>

                        <div />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Monitor;