import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import {connect} from 'react-redux';
export class Cadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Email</Text> 
        <TextInput value={this.props.email} style={styles.email}/>      
       
        <Text style={styles.welcome}>Senha</Text>
        <TextInput value={this.props.senha} secureTextEntry={true} style={styles.email}/>    
        <Button title='Cadastrar' onPress={this.login}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin:30,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  email:{
    backgroundColor:'#778899',
    height:40,
    padding:5,
    marginBottom:10
  }
});

const mapStateToProps = (state)=>{
    return {
        email:state.auth.email,
        senha:state.auth.senha
    };
};
const CadastroConnect = connect(mapStateToProps)(Cadastro);
export default CadastroConnect;
