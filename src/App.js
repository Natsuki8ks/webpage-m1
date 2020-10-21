import React, { useState } from 'react';
import './App.css';
import Navbar from './components/pages/Navbar'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './components/pages/Homepage/Home'
import Footer from './components/pages/Footer/Footer'
import Profile from './components/pages/Profile/Profile'
import Services from './components/pages/Services/Services'

function App() {

  // const [click, setClick] = useState();
  // const handleClick = () => setClick(false);

  return (
    <Router>
      <Navbar />
      <div className="first-top"  >
        { Switch ? '' : <Home /> }
      </div>
      {/* これが元凶 cf.Navbar*/}
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Home'  component={Home}/>
        <Route path='/profile' component={Profile} /> 
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
