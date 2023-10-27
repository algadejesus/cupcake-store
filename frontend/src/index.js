import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/tpv-i40-react.scss";
import "./assets/css/style.css";
// import "assets/css/tailwind.css";
import { ArgonControllerProvider } from "./context/index";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";



ReactDOM.render(
  <BrowserRouter>
    <ArgonControllerProvider>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/entrada" />
        </Switch>
      </ArgonControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
