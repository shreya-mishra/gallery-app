import React from "react";
import Container from "@material-ui/core/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div
            style={{ textAlign: "center", marginBottom: 10 }}
            className='text-center py-3'>
            Copyright &copy; Gallery App
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
