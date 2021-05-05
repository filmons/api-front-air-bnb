import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js'
import DetailsPlace from './pages/DetailsPlace'

function App() {
  return (
    <Router>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/place/:id' component={DetailsPlace}/>
      </Switch>
    </Router>
  );
}


export default App;
