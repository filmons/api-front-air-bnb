import React from 'react';
//import {withRouter} from 'react-router-dom' // pour trouver les props de header  car il est hors de swetch dans le App.js
import '../assets/footer.css';
import instagram from '../assets/img/instagram.svg';
import Facebook from '../assets/img/Facebook.svg';
import snapchat from '../assets/img/snapchat.svg';
import twitter from '../assets/img/twitter.svg';

class Footer extends React.Component {
  mealsByFirstLetter = (firstLetter) => {};

  render() {
    return (
      <footer>
        <div class="mainfoot">
          <div class="icons">
            <a
              href="https://www.instagram.com/accounts/login/"
              target=" _blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target=" _blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="facebook" />
            </a>
            <a
              href="https://twitter.com/?lang=fr"
              target=" _blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target=" _blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="liensutiles">
            <h3>Abut As</h3>
            <ul>
              <li>
                <a href="">Qui sommes NOUS</a>
              </li>
              <li>
                <a href="">Notre projet</a>
              </li>
              <li>
                <a href="">Pour savoir Plus</a>
              </li>
            </ul>
          </div>
          <div class="liensutiles">
            <h3>Service client</h3>
            <ul>
              <li>
                <a href="#">Reservation</a>
              </li>
              <li>
                <a href="#">Retours</a>
              </li>
              <li>
                <a href="#">Suivi de commande</a>
              </li>
            </ul>
          </div>
          <div class="liensutiles">
            <h3>Liens utiles</h3>
            <ul>
              <li>
                <a href="">L'équipe</a>
              </li>
              <li>
                <a href="">L'entreprise</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sociaux">
          <img src={Facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={snapchat} alt="snapshat" />
        </div>

        <p>
          Author: Hege Refsnes
          <br />
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </footer>
    );
  }
}

export default Footer; // pour trouver les props de header  car il est hors de swetch dans le App.js
