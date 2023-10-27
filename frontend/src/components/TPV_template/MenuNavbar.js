import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "routes.js";

function MenuBarTPV() {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active menu-item-selected" : "menu-item";
  };

  return (
    <div className="main-menu">
        <Nav className="d-flex justify-content-center align-items-center">
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <p className="nav-p">{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
    </div>
  );
}

export default MenuBarTPV;
