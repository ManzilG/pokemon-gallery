import CoreButton from "../CoreButton/CoreButton";
import "./Card.css"

const Card = (props) => {

    return (
        <div className="card">
            <img src = {props.src} />
            {props.handleLikeClick && <CoreButton onClick = {() => props.handleLikeClick(props.card)} text = "+"/>}
            {props.handleLikeClick && <CoreButton onClick = {() => props.handleDislikeClick(props.card)} text = "-"/>}
        </div>
    );
}

export default Card;