import "../../styles_cv/css/Education.css";

function Education(props) {
  return (
    <div className="Education card">
      <h2 className="card__headerStrip">Education</h2>
      <div className="card__content">
        <div className="Education__job">
          <div className="Education__jobTitle">Degree:</div>
          <div className="Education__content">Masters of Physics 2:1 (University of Exeter)</div>
        </div>
        <div className="Education__job">
          <div className="Education__jobTitle">Java - SE Programmer Certification: </div>
          <div className="Education__content">(Oracle certificate via Home Learning College)</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
