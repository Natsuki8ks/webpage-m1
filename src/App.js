import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Home from './components/pages/Homepage/Home'
import Footer from './components/pages/Footer/Footer'
import Profile from './components/pages/Profile/Profile'
import Services from './components/pages/Services/Services'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/profile' component={Profile} /> 
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
