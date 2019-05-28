import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,ImageBackground} from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={}

        this.login =this.login.bind(this);
        this.cadastro =this.cadastro.bind(this);
    }
    login(){
        this.props.navigation.navigate('Login');
    }
    cadastro(){
        this.props.navigation.navigate('Cadastro');
    }
  render() {
    return (
        
      <View style={styles.container}>
        
            <Text style={styles.welcome}>Home</Text> 
            <TouchableHighlight style={styles.loginBtn} onPress={this.login}>
            <Text style={{fontSize:25}}>Login</Text>
            </TouchableHighlight>    

            <TouchableHighlight style={styles.loginBtn} onPress={this.cadastro}>
                <Text style={{fontSize:25}}>Cadastro</Text>
            </TouchableHighlight> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center',
    margin: 13,
    color:'#778899'
  },
  loginBtn:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4169E1',
    borderRadius:5,
    marginLeft:30,
    marginRight:30,
    marginTop:15
  }
});
