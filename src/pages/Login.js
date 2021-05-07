import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorLogin: false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    const options = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post('http://localhost:8000/api/sigin', options, {
        headers: { 'content-type': 'application/json' },
      })
      .then((data) => {
        console.log(data);
        if(data.status === 200){
             this.props.history.push('/');

        }else{
            this.setState({
                errorLogin: true
            })
        }
        //this.props.history.push('/');
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <section>
          <div className="container">
            <div className="form">
            <h1>LogIn</h1>

                <p>
                    {this.state.errorLogin=== true ? "identity incorrect":""}
                </p>
              <p>
                <label htmlFor="">Email :</label>
                <input name="email" type="text" onChange={this.handleChange} />
              </p>
              <p>
                <label htmlFor="">Password :</label>
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <button onClick={this.handleClick}>Connexion</button>
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
