import { useState } from "react";

// style
import "../styles/css/CVPage.css";

// components
import CV from "./cv/CV";

function CVPage(props) {
  let [access, setAccess] = useState(false);
  return (
    <div className="CVPage">
      {access ? <CV /> : <div className="CVPage__noAccess">Noo Access - Please Login as Authorised User</div>}
    </div>
  );
}

export default CVPage;
