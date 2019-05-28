import React, {Component} from 'react';
import {createAppContainer,createBottomTabNavigator} from 'react-navigation';

import Produtos from './Produtos';
import Sobre from './Sobre';

const ReactNavegador = createBottomTabNavigator({
    Produtos:{
        screen:Produtos
    },
    Sobre:{
        screen:Sobre
    }
});

export default createAppContainer(ReactNavegador);