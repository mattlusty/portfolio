import "../../styles_cv/css/Pair.css";

function Pair(props) {
  return (
    <div className="Pair card">
      <div className="Pair__field">{props.field}</div>
      <div className="Pair__value">{props.value}</div>
    </div>
  );
}

export default Pair;
