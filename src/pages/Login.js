import React from 'react';
import axios from 'axios';
import '../assets/login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value 
        })
    }

    handleClick = () => {
        const options = {
            email: this.state.email,
            password: this.state.password,
        }

        axios.post('http://localhost:8000/api/sigin', options, {
            headers: {'content-type': 'application/json'}
        })
        .then(data => {
            console.log(data.status)
     this.props.history.push('/')
        })
        .catch(error => console.log(error))
        
        
    }
    
    render() {
        return (
            <>
               <section className="loginBody" >
                   <div className="container">
                        <div className="form">
                            <h1>Connexion</h1>
                            <p className="data">
                                <label htmlFor="">Email </label>
                                <input name="email" type="text" onChange={this.handleChange}  />
                            </p>
                            <p className="data">
                                <label htmlFor="">Mot de passe </label>
                                <input name="password" type="password" onChange={this.handleChange} />
                            </p>
                            <p className="buttonsSection">
                          
                                <button onClick={this.handleClick}>Connecter</button>
                                <button className="siginUpButton">Enregistrer</button>
                            </p>
                        </div>
                   </div>
                </section> 
            </>
        )
    }
}

export default Login;