import React, {useEffect, useState} from "react";
import Cards from "../Cards/Cards";

const HomePage = (props) => {

    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);
    const [index, setIndex] = useState(0);
    const [currentCards, setCurrentCards] = useState([]);
    const getCards = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(resp => resp.json())
                .then(data => resolve(data))
        })
    }
    useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=1126')
                .then(response => response.json())
                .then(data => {
                    setData(data.results);
                })
    }, []);

    useEffect(() => {
        if(data.length) {
            let cards = [];
            data.forEach(card => {
                cards.push(getCards(card.url))
            })

            Promise.all(cards).then(cards=> {
                setCards(cards);
                 setCurrentCards(cards.slice(0, 10));
                 setIndex(index + 10);
            })
        }
    }, [data])


    const loadMore = () => {
        setCurrentCards(currentCards.concat(cards.slice(index, index + 10)))
    }

    const handleDislikeClick = (card) => {
        setCurrentCards(currentCards.filter((c) => c.id !== card.id))
    }


    return (
        <div>
            {console.log("Current cards ", currentCards)}
                {cards.length && <Cards data = {currentCards}
                                        handleLikeClick = {props.handleLikeClick}
                                        handleDislikeClick={handleDislikeClick}/>}
            {cards.length && <button onClick={loadMore}>Load More...</button>}
        </div>
    );
}

export default HomePage;