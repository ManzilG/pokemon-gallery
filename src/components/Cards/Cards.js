import Card from "../Card/Card";
import "./Cards.css"
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";

const Cards = (props) => {

    return (
        <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                {props.data.map(card => {
                    return <Card
                        key = {card.id}
                        card = {card}
                        src={card.sprites.other.dream_world.front_default}
                        handleLikeClick = {props.handleLikeClick}
                        handleDislikeClick = {props.handleDislikeClick}
                    />
                })}
                </Grid>
        </div>
    );
};

export default Cards;