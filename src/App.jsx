import './App.css';
import Home from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  import Details from './components/Details';
import Create from './components/Create';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={Create} />
        <Route path="/details/:id" component={Details} />
        <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
