import { Component } from "react";
// style
import "../../styles_cv/css/CV.css";
// components
import Header from "./Header";
import Contact from "./Contact";
import Statement from "./Statement";
import Experience from "./Experience";
import PortfolioList from "./PortfolioList";
import Skills from "./Skills";
import Education from "./Education";
import Extra from "./Extra";
import Hobbies from "./Hobbies";

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <Header />
        <Contact />
        <Statement />
        <div className="CV__cols">
          <div className="CV__n1">
            <PortfolioList />
            <Experience />
          </div>
          <div className="CV__n2">
            <Skills />
            <Education />
            <Extra />
            <Hobbies />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
