import Card from "../Card/Card";
import "./Cards.css"
import {useEffect, useState} from "react";

const Cards = (props) => {

    const [currentCards, setCurrentCards] = useState([]);
    //const [cards, setCards] = useState([]);
    // const getCards = (url) => {
    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //             .then(resp => resp.json())
    //             .then(data => resolve(data))
    //     })
    // }

    // useEffect(() => {
    //         let cards = [];
    //         props.data.forEach(card => {
    //             console.log("Card in cards", card);
    //             cards.push(getCards(card.url))
    //         })
    //
    //         Promise.all(cards).then(cards=> {
    //             console.log("Cards in promise ", cards)
    //             setCards(cards);
    //         })
    // }, [])

    return (
        <div>
            <div className="flex">
                {props.data.map(card => {
                    return <Card src={card.sprites.other.dream_world.front_default}/>
                })}
            </div>
        </div>
    );
};

export default Cards;