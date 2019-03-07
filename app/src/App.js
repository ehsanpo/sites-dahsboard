import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import DesktopWindows from "@material-ui/icons/DesktopWindows";
import Memory from "@material-ui/icons/Memory";
import { createMuiTheme } from "@material-ui/core/styles";
import { Route } from "react-router-dom";

import "./App.scss";

import Monitor from "./monitors/Monitors.js";
import Menu from "./Menu";
import { PostList, PostCreate, PostEdit, PostShow } from "./sites/Sites.js";
import {
    ServerPostList,
    ServerPostCreate,
    ServerPostEdit,
    ServerPostShow
} from "./servers/Servers.js";
import {
    WikisPostList,
    WikisPostCreate,
    WikisPostEdit,
    WikisPostShow
} from "./wikis/Wikis.js";
import config from "./config.js";

const theme = createMuiTheme({
    palette: {
        type: "dark" ,// Switching the dark mode on is a single property value change.
        primary:  {main: '#ffe200'},
        secondary:{main: '#ffe200'},
       
    }
});

const route_default = [<Route exact path="/monitor" component={Monitor} />];

const App = () => (
    <Admin
        menu={Menu}
        title="Guts & Glory Webb"
        customRoutes={route_default}
        theme={theme}
        dataProvider={jsonServerProvider(config.api_url)}
    >
        <Resource
            name="sites"
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
            show={PostShow}
            icon={DesktopWindows}
        />
        <Resource
            name="servers"
            list={ServerPostList}
            create={ServerPostCreate}
            edit={ServerPostEdit}
            show={ServerPostShow}
            icon={Memory}
        />
        <Resource
            name="wikis"
            list={WikisPostList}
            create={WikisPostCreate}
            edit={WikisPostEdit}
            show={WikisPostShow}
            icon={Memory}
        />
    </Admin>
);

export default App;