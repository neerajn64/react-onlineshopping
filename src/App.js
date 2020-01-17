import React from 'react';
import './App.css';
import Home from './components/Home/home'
import Login from './components/Login/Login'
import ProductTitle from './components/ProductTitle/productTitle'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'



function App() {

  return (
    <Provider store ={store}>


    <Router>
      
      <Switch>
          <Route exact path='/' component={Home} />
         
        
          <Route path='/login' component={Login}/>

          <Route path='/producttitle' component = {ProductTitle}/>
            
      </Switch>
    </Router>
    </Provider>

  );

}

export default App;
