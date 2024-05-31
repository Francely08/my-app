import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sumadora" component={Sumadora} />
          <Route path="/traductor" component={Traductor} />
          <Route path="/tabla" component={Tabla} />
          <Route path="/experiencia" component={Experiencia} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

