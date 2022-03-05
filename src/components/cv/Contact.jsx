import "../../styles_cv/css/Contact.css";
import Pair from "./Pair";

function Contact(props) {
  return (
    <div className="Contact">
      <Pair field="Mobile" value="07821673724" />
      <Pair field="Email" value="mattlusty123@gmail.com" />
      <Pair field="Nationality" value="British" />
    </div>
  );
}

export default Contact;
