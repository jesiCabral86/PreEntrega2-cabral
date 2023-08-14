import "./NavBar.css";
import {CartWidget} from './CartWidget.jsx';
import {Button} from './Button';

export function NavBar() {
    return (
        <nav className="navbar">
            <img src="./img/logoMuebles.png"></img>
            <Button texto="Sillas"/>
            <Button texto="Sillones"/>
            <Button texto="Mesas"/>
            <img src="./img/logoCart.png"></img>
            <CartWidget items={0}></CartWidget>
        </nav>
    );
}
