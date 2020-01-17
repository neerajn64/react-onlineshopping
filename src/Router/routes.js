import React from 'react';
import {
    createStackNavigator,
    
  } from "react-navigation-stack";
  import { createAppContainer } from 'react-navigation';

  import Home from '../components/Home/home'
  import Login from '../components/Login/Login'
  import ProductTitle from '../components/ProductTitle/productTitle'

  
  const AppNavigator = createStackNavigator({
      Home:{
          screen: Home,
      },
      Login:{
          screen:Login,
      },
      ProductTitle:{
          screen:ProductTitle,
      }
  })
  
  export const AppContainer = createAppContainer(AppNavigator);