import React from 'react';

import axios from 'axios';
import image from '../assets/img/appartement1.jpg';
import '../assets/DetailsPlace.css';

class DetailsPlace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  getData = async () => {
    const id = this.props.match.params.id;
    const response = await axios.get(`http://localhost:8000/api/places/${id}`);

    console.log(response);

    this.setState({
      data: response.data.result,
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="container">
        <div className="place-card">
          {this.state.data.map((place, index) => {
            return (
              <div key={index}>
                <div className="descriptionContainer">
                  <img src={image} alt={place.name} />

                  <div className="description">
                    <h2>{place.name}</h2>
                    <p> {place.description}</p>
                    <p>
                      <span>Ville : {place.nameCity}</span>
                    </p>
                    <div className="reservation">
                      <p>{place.price_by_night}$/Night</p>
                      <section>Available {place.available}</section>
                      <button>Reserver</button>
                    </div>
                  </div>
                </div>

                <div className="Detailes">
                  <h2>Detailes</h2>
                  <p>
                    <strong>Rooms number:</strong> {place.rooms}
                  </p>
                  <p>
                    <strong>BathRooms number:</strong> {place.bathroom}
                  </p>
                  <p>
                    <strong>max geusts:</strong> {place.max_gursts}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DetailsPlace;
