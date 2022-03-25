import {Grid} from "@mui/material";
import Card from "../Card/Card";

const Gallery = (props) => {

    console.log("In gallery ", props.data);
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                {props.data.map(card => {
                    return <Card
                        key = {card.id}
                        card = {card}
                        src={card.sprites.other.dream_world.front_default}
                    />
                })}
            </Grid>
        </div>
    );
};

export default Gallery;