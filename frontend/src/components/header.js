import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";

const Header = () => {
  const [isNextVisible, setIsNextVisible] = useState(false);
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Otomanopee One",
        }}>
        <div style={{ height: 20 }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "100px" }} />
          <h1>Welcome To Shreya's Gallery</h1>
          <Button variant='text' color='secondary'>
            Logout
          </Button>
        </div>
      </div>
      <div style={{ height: 40 }} />
    </Container>
  );
};
const formRender = () => {
  return (
    <div>
      <h4>Form Visible</h4>
    </div>
  );
};

export default Header;
