import {useEffect, useState} from "react";
import Cards from "../Cards/Cards";

const HomePage = () => {

    const [data, setData] = useState([]);
    const [cards, setCards] = useState([]);
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
            })
        }
    }, [data])
    return (
        <div>
                {cards.length && <Cards data = {cards}/>}
        </div>
    );
}

export default HomePage;