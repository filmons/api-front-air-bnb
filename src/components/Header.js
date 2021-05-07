import React from 'react';
import '../assets/Header.css'
import HeaderImg from '../assets/img/headerImg.jpg'

class Header extends React.Component {
    constructor (props) {
        super(props);

    }
    
    render() {
        return (
            <div className="Header">
                <img src={HeaderImg}></img>
               
                <nav className="nav">
                <h1 className="headerTex">AirBnb</h1>
                <ul>
                    <li className="navItem">
                        <a href="/" className="link">
                        Home
                        </a> </li>
                        <li className="navItem">
                         <a href="/login" className="link">
                        Connexion
                        </a > </li>
                        <li className="navItem">
                            <a href="/signup"className="link">
                            Enregistrer
                        </a> </li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header;