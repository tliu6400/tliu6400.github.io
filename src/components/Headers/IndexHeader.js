/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Tom Liu</h1>
            <h6>Applied Mathematics + Computer Science</h6>
            <h6>@ Brown University</h6>
            <a style={{color: "white"}} href="https://www.linkedin.com/in/tomliu64/" target="_blank"><i className="fab fa-linkedin fa-2x" style={{padding: "12px"}}></i></a>
            <a style={{color: "white"}} href="https://github.com/tliu6400" target="_blank"><i className="fab fa-github fa-2x" style={{padding: "12px"}}></i></a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
