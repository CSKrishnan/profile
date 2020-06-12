import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Icon } from 'react-native-elements'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon:({TintColor})=>(<Icon name="person" style={{color:TintColor}}/>)
  }
    render() {
      return(
        <View >
          <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>PROFILE: </Text>
      <View style ={{flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",flex:1,backgroundColor:'white'}}>
        <Image
        style={{width: 100, height: 100,borderRadius:100,marginTop:50,marginLeft:5}}
        source={{uri: 'data:image/png;base64,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'}}
        />
        <View style= {{marginLeft:25,marginTop:50}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>Sai Krishnan C</Text>
          <Text style={{fontSize:15,color:'black',fontWeight:'600'}}>M.Tech (Integrated)</Text>
        </View>
        </View>
        </View>
      );
    }
}

export default HomeScreen;

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