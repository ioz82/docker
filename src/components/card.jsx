import Avatar from "./avatar";
import "./card.css";

const Card = ({ camera, src, name, date, total }) => {
  return (
    <div className="Card">
      <div className="Footer">
        <Avatar src={src} />
        <div className="Info">
          <span>Name: {name}</span>
          <span>Total: {total}</span>
          <span>Date: {date}</span>
          <span>Camera: {camera}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
