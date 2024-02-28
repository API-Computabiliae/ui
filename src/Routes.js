import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
 
function App() {
  return (
    <Router>
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}
 
export default App;