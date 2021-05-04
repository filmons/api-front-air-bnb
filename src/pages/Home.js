import React from 'react';
import '../assets/Home.css';
import axios from 'axios';
import image from '../assets/img/appartement1.jpg';

class Home extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            data: []
        }
    }
    getData = async () => {
        const response = await axios.get('http://localhost:8000/api/places');

        console.log(response.data.name);

        this.setState({
            data: response.data.name
        })
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="container">
                <div className="place-card">
                {
                    this.state.data.map((place, index) => {
                        return (
                                <div className="item"  key={index}>
                                    <a href={`/place/` + place.id}>
                                    <h2>{ place.name }</h2>
                                    <img src={image} alt={place.name} />
                                    <p><span>Ville : { place.nameCity }</span><span>Prix :{ place.price_by_night } $</span></p>
                                    </a>
                                </div>
                        )
                    })
                }
            </div>
        </div>
        )
    }
}

export default Home;