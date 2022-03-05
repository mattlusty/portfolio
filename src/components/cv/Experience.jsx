import "../../styles_cv/css/Experience.css";

function Experience(props) {
  return (
    <div className="Experience card">
      <h2 className="headerStrip">Work Experience</h2>
      <div className="content">
        <div className="primary">
          <h3 className="header">Primary</h3>
          <div className="job">
            <div className="title">Intelliflo Support Analyst (2019 - to date)</div>
            <div className="content">
              <ul>
                <li>Supporting “Intelliflo Office” Financial Advice Software</li>
                <li>Applying analytical skills to efficiently resolve user issues</li>
                <li>Effectively communicating with customers and staff</li>
                <li>Developing and presenting Integration system guides</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <div className="title">Freelancing (2017 - to date)</div>
            <div className="content">
              <div>Creating a web apps and websites:</div>
              <ul>
                <li>With React, Javascript, HTML, CSS, SASS</li>
                <li>Implementing HTML tables, form elements</li>
                <li>Creating CSS transitions and Javascript animations</li>
                <li>Designing responsive mobile-first layouts</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <div className="title">Javascript Internship - IMGroup (2012 - 2013)</div>
            <div className="content">
              <ul>
                <li>Developed proficiency in Javascript</li>
                <li>Created infographical web apps with JS, HTML, CSS, SVG</li>
                <li>Constructed wireframes UI models using MockFlow tools</li>
                <li>Performed user tests on code</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="other">
          <h3 className="header">Other</h3>
          <div className="job">
            <div className="title">Teaching Assistant (2018 - 2019)</div>
            <div className="content">
              <ul>
                <li>Planned and delivered lessons for Sciences and Maths</li>
                <li>Assisted at Secondary, Primary and Special Needs schools</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <div className="title">Work and Travel - Australia and New Zealand (2013 - 2017)</div>
            <div className="content">
              <ul>
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
