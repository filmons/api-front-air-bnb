import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import DetailsPlace from './pages/DetailsPlace';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/place/:id' component={DetailsPlace}/>
      <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}


export default App;
