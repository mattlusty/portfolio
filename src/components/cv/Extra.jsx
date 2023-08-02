import "../../styles_cv/css/Extra.css";

function Extra(props) {
  return (
    <div>
      <div className="Extra card">
        <h2 className="card__headerStrip">Extracurricula</h2>
        <div className="Extra__content card__content">
          <div className="Extra__job">
            <div className="Extra__jobTitle">Volunteer work for Sea Cadets</div>
            <div>Led lessons and supervised cadets trips</div>
          </div>
          <div className="Extra__job">
            <div className="Extra__jobTitle">Gold Duke of Edinburgh Award</div>
            <div>Expedition across Royal National Park, Sydney</div>
          </div>
          <div className="Extra__job">
            <div className="Extra__jobTitle">Three Peaks Challenge UK</div>
            <div>Climbed UK’s three highest peaks</div>
          </div>
          <div className="Extra__job">
            <div className="Extra__jobTitle">Travelling Australasia and Asia</div>
            <div>Horse riding, scuba diving, friends and memories</div>
          </div>
          <div className="Extra__job">
            <div className="Extra__jobTitle">10 day Hike across the Outer Hebrides</div>
            <div>Torrential weather with only a tarp for a tent.</div>
          </div>
        </div>
      </div>
      {/* <div className="Extra card">
        <h2 className="headerStrip">Extracurricula Experiences</h2>
        <div className="content">
          <div className="job">
            <div className="title">Squash and Tennis</div>
          </div>
          <div className="job">
            <div className="title">Kayaking, Canoeing and Rowing</div>
          </div>
          <div className="job">
            <div className="title">Hiking, camping and exploring</div>
          </div>
          <div className="job">
            <div className="title">Skateboarding and Snowboardin</div>
          </div>
          <div className="job">
            <div className="title">Cooking and creating new recipes</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Extra;
