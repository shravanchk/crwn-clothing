import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <h1>Hats page</h1>
)

function App() {
  return (
    <div>
    
      <Route exact path='/' component={HomePage}/>
      <Route  path='/hats' component={HatsPage}/>
     
    </div>
    
    
    
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
