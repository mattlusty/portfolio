import "../../styles_cv/css/Hobbies.css";

function Hobbies(props) {
  return (
    <div className="Hobbies card">
      <h2 className="card__headerStrip">Hobbies</h2>
      <div className="card__content">
        <div className="Hobbies__hobbies">
          <div className="Hobbies__card card">Squash</div>
          <div className="Hobbies__card card">Tennis</div>
          <div className="Hobbies__card card">Hiking</div>
          <div className="Hobbies__card card">Camping</div>
          <div className="Hobbies__card card">Kayaking</div>
          <div className="Hobbies__card card">Rowing</div>
          <div className="Hobbies__card card">Snowboarding</div>
        </div>
      </div>
    </div>

    // <h2 className="headerStrip">Extracurricula Experiences</h2>
    // <div className="content">
    //   <div className="job">
    //     <div className="title">Squash and Tennis</div>
    //   </div>
    //   <div className="job">
    //     <div className="title">Kayaking, Canoeing and Rowing</div>
    //   </div>
    //   <div className="job">
    //     <div className="title">Hiking, camping and exploring</div>
    //   </div>
    //   <div className="job">
    //     <div className="title">Skateboarding and Snowboardin</div>
    //   </div>
    //   <div className="job">
    //     <div className="title">Cooking and creating new recipes</div>
    //   </div>
    // </div>
  );
}

export default Hobbies;
