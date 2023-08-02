import "../../styles_cv/css/Skills.css";

function Skills(props) {
  return (
    <div className="Skills card">
      <h2 className="card__headerStrip">Tech Skills</h2>
      <div className="Skills__content card__content">
        <h3 className="Skills__header">Primary</h3>
        <div className="Skills__skills">
          <div className="Skills__card card">React</div>
          <div className="Skills__card card">Javascript</div>
          <div className="Skills__card card">HTML</div>
          <div className="Skills__card card">CSS</div>
        </div>
        <h3 className="Skills__header">Other</h3>
        <div className="Skills__skills">
          <div className="Skills__card card">NodeJS</div>
          <div className="Skills__card card">SQL</div>
          <div className="Skills__card card">noSQL</div>
          <div className="Skills__card card">Git</div>
          <div className="Skills__card card">Java</div>
          <div className="Skills__card card">Salesforce</div>
          <div className="Skills__card card">ArchiCAD</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
