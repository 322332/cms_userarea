import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Menu(props) {
  console.log(props.block);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">CMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {props.block.links.map((item, id) =>
            item.sublink.length === 0 ? (
              <Nav.Link href={item.target}>{item.linkName}</Nav.Link>
            ) : (
              <NavDropdown title={item.linkName} id="collasible-nav-dropdown">
                {item.sublink.map((subitem) => (
                  <NavDropdown.Item href={subitem.target}>
                    {subitem.linkName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
