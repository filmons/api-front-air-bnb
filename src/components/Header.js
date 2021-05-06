import React from 'react';
import { withRouter } from 'react-router-dom'; // pour trouver les props de header  car il est hors de swetch dans le App.js
import './header.css';
//la class pour afiche  les category en clickant sur le button
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searchBy: '--Please choose an option--',
    };
  }

  searchMeals = (event) => {
    //event.preventDefault() // Empêche le formulaire d'avoir un comportement normal, components'est-à-dire qu'on empêche qu'il s'actualise

    this.props.history.push(
      '/search/' + this.state.search + '/' + this.state.searchBy
    );
  };

  handleSearchChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.searchMeals} className="Form">
          <select
            name="searchBy"
            id="searchBy"
            value={this.state.searchBy}
            onChange={this.handleSearchChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="name">Name</option>
            <option value="category">Categry</option>
            <option value="area">Area</option>
            <option value="ingredients">Ingredients</option>
          </select>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleSearchChange}
            name="search"
          />
          <button>search</button>
        </form>
      </header>
    );
  }
}

export default withRouter(Header);
