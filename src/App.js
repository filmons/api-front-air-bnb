import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import DetailsPlace from './pages/DetailsPlace';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header'

function App() {
  return (
    <div>
    <Header/>
    <Router>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/place/:id' component={DetailsPlace}/>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
    </div>
  );
}


export default App;
