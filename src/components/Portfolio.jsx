import { withRouter } from "react-router-dom";
//style
import "../styles/css/Portfolio.css";

function Portfolio(props) {
  var navigate = (site) => {
    console.log(site);
    window.location.href = site;
    // props.history.push(site);
  };

  return (
    <div className="Portfolio">
      <div className="Portfolio__item" onClick={() => navigate("https://moneymoon.netlify.app/")}>
        <div className="Portfolio__header">Money Moon</div>
        <div className="Portfolio__content">
          Money Moon manages your clients' finances intelligently in one place. Record investments, assets, savings and
          spending behaviours to provide a powerful picture of requirements. Smart, intuitive and seemless user
          experience provides finance advisers optimised data efficiency to launch their clients to finanical success.
          Make your clients money reach the moon today!
        </div>
      </div>
      <div className="Portfolio__item" onClick={() => navigate("https://imind.netlify.app/")}>
        <div className="Portfolio__header">iMind Ventures</div>
        <div className="Portfolio__content">
          iMind is a web of positive ideas and connections for building successful and positive change. A platform to
          voice grand ideas to help the community and businesses for doing good things in the world. Ideas are posted
          and allow for people and businesses to pich their plans and skills provide these ideas with the means to grow.
          iMind brings ideas and skills together. Solving tomorrow's problems together, today.
        </div>
      </div>
      <div className="Portfolio__item" onClick={() => navigate("stellaNotes")}>
        <div className="Portfolio__header">Stella Notes</div>
        <div className="Portfolio__content">
          No longer are your vast collections of detailed notes spread across miles of note-space. Stella notes
          collapses interstella distances between different regions within large notes with a smart folding structure.
          Now you can collect and organise expansive reams of notes whilst retaining sight of it all in. Easy to
          navigate, search, edit and consume large collections of data utilising multi-level nested folding structure.
          All your notes at your fingers tips at lightening speed.
        </div>
      </div>
      <div className="Portfolio__item" onClick={() => navigate("wishListy")}>
        <div className="Portfolio__header">Wish Listy</div>
        <div className="Portfolio__content">
          Family and friends who wish together stay together. Make lists of the gifts you would love to receive and when
          the time comes a wish will be yours. Intelligently see and monitor what your friends and family are wishing
          for in realtime, with as much detail as they and you need. When a friend grants a friend a gift wish (and have
          bought it), the lucky friend won't know until they unwrap their wish, however others will no longer see that
          wish in that friend's wish list - to ensure prevnting receiving double. Wishing big? No problem, Wish Listy
          allows for the expense of gifts to be shared between multiple people.
        </div>
      </div>
    </div>
  );
}

export default withRouter(Portfolio);
