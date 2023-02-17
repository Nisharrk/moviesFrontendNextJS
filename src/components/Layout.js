import React from "react";
import { Container } from "react-bootstrap";
import MainNav from "./MainNav";

const Layout = (props) => {
  return (
    <div>
      <MainNav />
      <br />
      <Container>{props.children}</Container>
      <br />
    </div>
  );
};

export default Layout;
