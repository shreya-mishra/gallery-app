import { Container } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Otomanopee One",
        }}>
        <div style={{ height: 20 }} />

        <h1>Welcome To Gallery</h1>
      </div>
    </Container>
  );
};

export default Header;
