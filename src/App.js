import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import MenuBelajar from './components/MenuBelajar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/tailwind.css'
import Materi from './components/Materi';
import QuizLayout from './components/QuizLayout';
import NotFound from './components/NotFound';
import Test from './components/Test';
import FinishMateri from './components/FinishMateri';
import Tentang from './components/Tentang';
import Panduan from './components/Panduan';

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
            <Route path='/test' component={Test} />
            <Route path='/quiz' component={QuizLayout} />
            <Route path='/finish-materi' component={FinishMateri} />
            <Route path='/tentang' component={Tentang} />
            <Route path='/panduan' component={Panduan} />
            <Route path='/peluangku' component={Jumbotron} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>


  )
}

export default App;