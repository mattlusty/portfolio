import "../../styles_cv/css/Skills.css";

function Skills(props) {
  return (
    <div className="Skills card">
      <h2 className="headerStrip">Tech Skills</h2>
      <div className="content">
        <h3 className="header">Primary</h3>
        <div className="skills">
          <div className="card">React</div>
          <div className="card">Javascript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
        </div>
        <h3 className="header">Other</h3>
        <div className="skills">
          <div className="card">NodeJS</div>
          <div className="card">SQL</div>
          <div className="card">noSQL</div>
          <div className="card">Git</div>
          <div className="card">Java</div>
          <div className="card">Salesforce</div>
          <div className="card">ArchiCAD</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
