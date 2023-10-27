import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "routes.js";
import TPVLogo from "assets/img/logo/4.0_Logo_longo_branco.svg";

function TPVHeader() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar>
        <Container className="d-flex justify-content-start align-items-center container-header">
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            <img src={TPVLogo} className="tpv-header-logo"></img>
          </Navbar.Brand>
        </Container>
        <Container className="d-flex justify-content-end align-items-center container-header">
          <p>Menu</p>
        </Container>
    </Navbar>
  );
}

export default TPVHeader;
