import "./cardstyles.css";

function CardData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="card" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  );
}

export default CardData;