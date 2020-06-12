import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base'
class InfoScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon:({TintColor})=>(<Icon name="ios-search" style={{color:TintColor}}/>)
  }
    render() {
      return(
        <View >
          <View style = {{flex:1,marginTop:50}}>
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>
            SKILLS:
            </Text>
            <Text style={{fontSize:20}}>   -Intermediate skills in:</Text>
            <Text style={{fontSize:20}}>              -> Java    </Text> 
            <Text style={{fontSize:20}}>              -> C++    </Text> 
            <Text style={{fontSize:20}}>              -> Python    </Text> 
            <Text style={{fontSize:20}}>   -Beginner in App Development in REACT NATIVE PLATFORM:</Text>
      
        </View>
        </View>
      );
    }
}

export default InfoScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6e6e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plain: {
      flex: 1,
    },
});