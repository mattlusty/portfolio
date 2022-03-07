import "../../styles_cv/css/PortfolioList.css";

function Portfolio(props) {
  return (
    <div className="PortfolioList card">
      <h2 className="card__headerStrip">Website Portfolio</h2>
      <div className="PortfolioList__content card__content">
        <div className="PortfolioList__primary">
          {/* <h3 className="header">iMind</h3> */}
          <div className="PortfolioList__job">
            <div className="PortfolioList__header">
              <div className="PortfolioList__jobTitle">iMind</div>
              <div href="https://imind.netlify.app" className="PortfolioList__link">
                https://imind.netlify.app
              </div>
            </div>
            <div className="PortfolioList__content">
              <ul className="PortfolioList__ul">
                <li>Mobile first responsive layout</li>
                <li>Optmised images for screen sizes and resolutions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="PortfolioList__other">
          {/* <h3 className="header">Lusty Financial</h3> */}
          <div className="PortfolioList__job">
            <div className="PortfolioList__header">
              <div className="PortfolioList__jobTitle">Lusty Financial</div>
              <div href="https://matt-lusty.com" className="PortfolioList__link">
                https://matt-lusty.com
              </div>
            </div>

            <div className="PortfolioList__content">
              <ul className="PortfolioList__ul">
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
