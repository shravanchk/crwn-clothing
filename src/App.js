import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'

// const HatsPage = (props) => {
//   console.log({props})
//   return(
//     <div>
//     <h1>Hats page</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
    
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
     
    </div>
    
    
    
    // <div>
    //   <HomePage></HomePage>
    // </div>
  );
}

export default App;
