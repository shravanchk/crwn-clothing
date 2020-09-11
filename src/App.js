import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'



function App() {
  return (
    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInAndSignUpPage}/>
      </switch>
    </div>
    
    
    
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
