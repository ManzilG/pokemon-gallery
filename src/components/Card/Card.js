import CoreButton from "../CoreButton/CoreButton";
import "./Card.css"

const Card = (props) => {

    const handleLikeClick = () => {
        console.log("I liked it.....");
    }

    const handleDislikeClick = () => {
        console.log("I disliked it.....");
    }


    return (
        <div className="card">
            <img src = {props.src} />
            <CoreButton onClick = {handleLikeClick} text = "+"/>
            <CoreButton onClick = {handleDislikeClick} text = "-"/>
        </div>
    );
}

export default Card;