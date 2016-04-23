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
  Text,
  View,
  Image,
} from 'react-native';

class ImageDemo extends Component {
  render() {
    return (
     <View style={{marginLeft:10,marginTop:10}}>
     <Text style={{fontSize:16}}>'测试本地图片'</Text>
     <Image soure={require('img!test_2')}/>
     </View>
    );
  }
}

AppRegistry.registerComponent('ImageDemo', () => ImageDemo);
