/*
import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView,Button} from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.child1}>
      <Image
          style={{width: 100, height: 100,borderRadius:100}}
          source={{uri: 'https://scontent.fmaa3-1.fna.fbcdn.net/v/t31.0-0/c0.144.370.370a/p370x247/26233293_2026673197551632_3368118111048597947_o.jpg?_nc_cat=110&_nc_oc=AQm9QGlc8iYGFxZcvt-kJtTRN1q5lzfkSe7k1KedG98HHNWVgAT197q-KUG1t3WApqM&_nc_ht=scontent.fmaa3-1.fna&oh=067944daaad64f42d7971acbc9d555e3&oe=5DCFECE1'}}
      />
      </View>
      <View style={styles.child2}>
      <Text style={{color: 'white',fontSize: 22}} >Arunselvan AS 18BLC1136 </Text>
      </View>
    </View>
    
    <ScrollView >
      <View style={{justifyContent:'center',alignItems:'center',marginTop:25,flex:1}}>
        <Text style={{fontSize:45,color:'black',fontWeight:'bold'}}>
          RESUME
        </Text>
      </View>
      <View>
      <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>PROFILE: </Text>
       </View>
      <View style ={{flexDirection:'row',justifyContent:"flex-start",alignItems:"flex-start",flex:1,backgroundColor:'white'}}>
        <Image
        style={{width: 100, height: 100,borderRadius:100,marginTop:50,marginLeft:5}}
        source={{uri: 'https://scontent.fmaa3-1.fna.fbcdn.net/v/t31.0-0/c0.144.370.370a/p370x247/26233293_2026673197551632_3368118111048597947_o.jpg?_nc_cat=110&_nc_oc=AQm9QGlc8iYGFxZcvt-kJtTRN1q5lzfkSe7k1KedG98HHNWVgAT197q-KUG1t3WApqM&_nc_ht=scontent.fmaa3-1.fna&oh=067944daaad64f42d7971acbc9d555e3&oe=5DCFECE1'}}
        />
        <View style= {{marginLeft:25,marginTop:50}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'600'}}>Arunselvan AS</Text>
          <Text style={{fontSize:15,color:'black',fontWeight:'600'}}>B.Tech ECM 2nd Year</Text>
        </View>
      </View>
      <View style = {{flex:1,marginTop:50}}>
        <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>
        SKILLS:
        </Text>
        <Text style={{fontSize:20}}>   -Intermediate skills in:</Text>
        <Text style={{fontSize:20}}>              -> C    </Text> 
        <Text style={{fontSize:20}}>              -> C++    </Text> 
        <Text style={{fontSize:20}}>              -> Python    </Text> 
        <Text style={{fontSize:20}}>   -Beginner in App Development in REACT NATIVE PLATFORM:</Text>
      
      </View>
      <View style = {{flex:1,marginTop:50}}>
        <Text style={{fontSize:30,color:'black',fontWeight:'bold',marginLeft:5}}>
        EXPERIENCE:
        </Text>
        <Text style={{fontSize:20}}>    -2 Years experience in C,C++ and Python </Text>
        <Text style={{fontSize:20}}>    -Participated in various Coding Competition such as:  </Text>
        <Text style={{fontSize:20}}>              ->CodeBuzz 2.O @VIT CHENNAI </Text> 
        <Text style={{fontSize:20}}>              ->TCS CODEVISTA    </Text> 
        
      
      </View>
    </ScrollView>
    
    
    );
}
*/
import React from 'react';
import { StyleSheet,ScrollView,Text,View,Image,Button } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/tabs/HomeScreen';
import InfoScreen from './src/screens/tabs/InfoScreen';
import {Icon} from 'react-native-vector-icons/Ionicons'

const tabs=  createBottomTabNavigator({
  Home : HomeScreen,
  Info : InfoScreen,
});

const Container = createAppContainer(tabs);

export default function App() {
  return (
    <View style={styles.container}>
      <Container/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
});
