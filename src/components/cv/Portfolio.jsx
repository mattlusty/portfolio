import "../../styles_cv/css/Portfolio.css";

function Portfolio(props) {
  return (
    <div className="Portfolio card">
      <h2 className="headerStrip">Website Portfolio</h2>
      <div className="content">
        <div className="primary">
          {/* <h3 className="header">iMind</h3> */}
          <div className="job">
            <div className="header">
              <div className="title">iMind</div>
              <div href="https://imind.netlify.app" className="link">
                https://imind.netlify.app
              </div>
            </div>
            <div className="content">
              <ul>
                <li>Mobile first responsive layout</li>
                <li>Optmised images for screen sizes and resolutions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="other">
          {/* <h3 className="header">Lusty Financial</h3> */}
          <div className="job">
            <div className="header">
              <div className="title">Lusty Financial</div>
              <div href="https://matt-lusty.com" className="link">
                https://matt-lusty.com
              </div>
            </div>

            <div className="content">
              <ul>
                <li>Animated multi level accordion menus</li>
                <li>Dropdown menus, input forms, paginated table data</li>
                <li>React Routing navigation to create single-page application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
