/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav className="justify-content-center">
            <ul>
              <li>
                <a
                  href="mailto:tom_liu@brown.edu"
                >
                  tom_liu@brown.edu
                </a>
              </li>
              <li>
                  (858)-465-0783
              </li>
              <li>
                  69 Brown St, Box 2653, Providence, RI, 02912
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Tom Liu
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
