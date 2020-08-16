import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import MenuBelajar from './components/MenuBelajar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/tailwind.css'
import Materi from './components/Materi';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full md:h-screen">
        <Header />
        <div style={{ marginTop: "5rem" }}>
          <Switch>
            <Route exact path='/' component={Jumbotron} />
            <Route path='/menu-belajar' component={MenuBelajar} />
            <Route path='/materi' component={Materi} />
          </Switch>
        </div>
      </div>
    </Router>


  )
}

export default App;