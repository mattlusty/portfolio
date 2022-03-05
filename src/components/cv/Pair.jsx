import "../../styles_cv/css/Pair.css";

function Pair(props) {
  return (
    <div className="Pair card">
      <div className="field">{props.field}</div>
      <div className="value">{props.value}</div>
    </div>
  );
}

export default Pair;
