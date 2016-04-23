/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native';

class TextInputDemo extends Component {
  render() {
    return (
       <View style={{backgroundColor:'#1D1B24',flex:1}}>

      <Image style={styles.style_image}/>

      <TextInput
      style={styles.style_user_input}
      placeholder='手机号'
      numberOfLines={1}
      autoFocus={true}
      keyboardType='numeric'
      maxLength={11}
      textAlign='left'/>


      <TextInput 
      style={styles.style_user_input}
      placeholder='密码'
      numberOfLines={1}
      autoFocus={true}
      textAlign='left'
      secureTextEntry={true}/>
      <View style={styles.style_view_commit}>
      <Text style={{color:'#fff'}}>登录</Text>
      </View>

      <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:20}}>
      <Text style={styles.style_view_unlogin}>
      无法登录？
      </Text>
      <Text style={styles.style_view_register}>
      新用户
      </Text>
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
 style_image:{
    borderRadius:35,
    height:70,
    width:70,
    marginTop:100,
    alignSelf:'center',
    backgroundColor:'yellow',
  },
  style_user_input:{
    backgroundColor:'#fff',
    marginTop:10,
    height:35,
    marginRight:18,
    marginLeft:18,
  },


  style_view_commit:{
    marginTop:15,
    marginLeft:18,
    marginRight:18,
    backgroundColor:'#63B8FF',
    height:40,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center', 
  },
 style_view_unlogin:{
  fontSize:12,
  color:'#63B8FF',
  marginLeft:18,
 },
 style_view_register:{
  fontSize:12,
  color:'#63B8FF',
  alignItems:'flex-end',
  flex:1,
  flexDirection:'row',
  textAlign:'right',
  marginRight:18,
 },
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
