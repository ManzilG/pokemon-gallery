import Button from "@mui/material/Button";

const CoreButton = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>
}

export default CoreButton;