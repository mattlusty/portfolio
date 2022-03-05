import "../../styles_cv/css/Education.css";

function Education(props) {
  return (
    <div className="Education card">
      <h2 className="headerStrip">Education</h2>
      <div className="content">
        <div className="job">
          <div className="title">Degree:</div>
          <div className="content">Masters of Physics 2:1 (University of Exeter)</div>
        </div>
        <div className="job">
          <div className="title">Java - SE Programmer Certification: </div>
          <div className="content">(Oracle certificate via Home Learning College)</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
