import React from 'react';
import axios from 'axios';
import '../assets/signUp.css'
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prenom: '',
            nom: '',
            email: '',
            role: '',
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
            first_name: this.state.prenom,
            last_name: this.state.nom,
            role: this.state.role
        }

        axios.post('http://localhost:8000/api/signup', options, {
            headers: {'content-type': 'application/json'}
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
        console.log(options);
        this.props.history.push('/login')
    }
    
    render() {
        return (
            <>
               <section className="siginUpform">
                   <div className="container">
                        <div className="form">
                        <h1>Enregistrer</h1>
                            <p className="data">
                                <label htmlFor="">Prénom </label>
                                <input name="prenom" type="text" onChange={this.handleChange} />
                            </p>
                            <p className="data">
                                <label htmlFor="">Nom </label>
                                <input name="nom" type="text" onChange={this.handleChange} />
                            </p>
                            <p className="data">
                                <label htmlFor="">Émail </label>
                                <input name="email" type="email" onChange={this.handleChange} />
                            </p>
                            <p className="data">
                                <label htmlFor="">Rôle </label>
                                <select name="role" onChange={this.handleChange} >
                                    <option >Votre Rôle</option>
                                    <option value="0">Touriste</option>
                                    <option value="1">Hôte</option>
                                </select>
                            </p>
                            <p className="data">
                                <label htmlFor="">Mot de passe </label>
                                <input name="password" type="password" onChange={this.handleChange} />
                            </p>
                            <p>
                                <button onClick={this.handleClick}>Inscription</button>
                            </p>
                        </div>
                   </div>
                </section> 
            </>
        )
    }
}

export default SignUp;