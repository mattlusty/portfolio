import "../../styles_cv/css/Experience.css";

function Experience(props) {
  return (
    <div className="Experience card">
      <h2 className="card__headerStrip">Work Experience</h2>
      <div className="Experience__content card__content">
        <div className="Experience__primary">
          <h3 className="Experience__header">Primary</h3>
          <div className="Experience__job">
            <div className="Experience__jobTitle">Intelliflo Support Analyst (2019 - to date)</div>
            <div>
              <ul className="Experience__ul">
                <li>Supporting “Intelliflo Office” Financial Advice Software</li>
                <li>Applying analytical skills to efficiently resolve user issues</li>
                <li>Effectively communicating with customers and staff</li>
                <li>Developing and presenting Integration system guides</li>
              </ul>
            </div>
          </div>
          <div className="Experience__job">
            <div className="Experience__jobTitle">Freelancing (2017 - to date)</div>
            <div>
              <div>Creating a web apps and websites:</div>
              <ul className="Experience__ul">
                <li>With React, Javascript, HTML, CSS, SASS</li>
                <li>Implementing HTML tables, form elements</li>
                <li>Creating CSS transitions and Javascript animations</li>
                <li>Designing responsive mobile-first layouts</li>
              </ul>
            </div>
          </div>
          <div className="Experience__job">
            <div className="Experience__jobTitle">Javascript Internship - IMGroup (2012 - 2013)</div>
            <div>
              <ul className="Experience__ul">
                <li>Developed proficiency in Javascript</li>
                <li>Created infographical web apps with JS, HTML, CSS, SVG</li>
                <li>Constructed wireframes UI models using MockFlow tools</li>
                <li>Performed user tests on code</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Experience__other">
          <h3 className="header">Other</h3>
          <div className="Experience__job">
            <div className="Experience__jobTitle">Teaching Assistant (2018 - 2019)</div>
            <div>
              <ul className="Experience__ul">
                <li>Planned and delivered lessons for Sciences and Maths</li>
                <li>Assisted at Secondary, Primary and Special Needs schools</li>
              </ul>
            </div>
          </div>
          <div className="Experience__job">
            <div className="Experience__jobTitle">Work and Travel - Australia and New Zealand (2013 - 2017)</div>
            <div>
              <ul className="Experience__ul">
                <li>Led housekeeping teams at holiday campsites</li>
                <li>Managed customer relationships at bars and restaurants.</li>
                <li>Marketing for hospitality venues</li>
                <li>Maintencence roles on ranches, farms and campsites</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
