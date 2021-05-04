import React from "react";

// core components
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

// sections for this page
// import AboutMe from "./AboutMe.js";
// import Courses from "./Courses.js";
// import Skills from "./Skills.js";
// import Experience from "./Experience.js";
// import Projects from "./Projects.js";
// import ReadingList from "./ReadingList.js";
// import Contact from "./Contact.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <IndexNavbar /> */}
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          {/* <AboutMe />
          <Courses />
          <Experience />
          <Projects />
          <Skills />
          <ReadingList />
          <Contact /> */}
        </div>
        {/* <DefaultFooter></DefaultFooter> */}
      </div>
    </>
  );
}

export default Index;
