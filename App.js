import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';

import Reducers from './src/Reducers';

import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro';
import HomePrincipal from './src/Telas/HomePrincipal';

let store = createStore(Reducers);

const ReactNavegador = createStackNavigator({
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  },
  Login:{
    screen:Login
  },
  HomePrincipal:{
    screen:HomePrincipal
  }

});


const AppContainer = createAppContainer(ReactNavegador);
export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
//export default createAppContainer(ReactNavegador);


