import CoreText from "../CoreText/CoreText";
import "./Header.css"
import CoreButton from "../CoreButton/CoreButton";

const Header = () => {

    return (
        <div>
                <CoreText text="POKEMON PINTEREST"/>
                {/*<CoreButton text = "Home" onClick = {getData}/>*/}
                {/*<CoreButton text = "Gallery"/>*/}
                <div className="topnav">
                    <a href="#homepage">Home Page</a>
                    <a href="#gallery">View Your Gallery</a>
                    <a href="#about">About</a>
                </div>
        </div>
    );
}

export default Header;