import React from "react";
import resume from "../../assets/pdf/resume.pdf";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              Tom Liu
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* <NavItem> */}
              <NavLink
                href="#about-me"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about-me").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <p>About</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("courses").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <p>Courses</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("experience")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                }}
              >
                <p>Experience</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                }}
              >
                <p>Projects</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("skills").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <p>Skills</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#reading-list"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("reading-list").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <p>Reading List</p>
              </NavLink>
              {/* </NavItem> */}
              {/* <NavItem> */}
              <NavLink
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }}
              >
                <p>Contact</p>
              </NavLink>
              {/* </NavItem> */}
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href={resume}
                  target="_blank"
                  id="resume"
                  // onClick={(e) => e.preventDefault()}
                >
                  <p>Resume</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
