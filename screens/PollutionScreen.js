import React from 'react';
import {getPollution} from '../api/Pollution';
import { StyleSheet, Text, View, ActivityIndicator, Alert, ScrollView, Button, FlatList,} from 'react-native';
import { Component } from 'react';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {onchangelatlon} from '../components/WeatherData';
import WeatherData from '../components/WeatherData';


export default class PollutionScreen extends Component {

 constructor(props){
     super(props);
     this.state = {
         isLoading: true,
         data: [],
     }
 }


 
 componentDidMount (){
/*
    onchangelatlon().then(lat1 =>{
      this.setState({
      lat : lat1,
      });
    }, error => {
      Alert.alert('Error', 'Error2', lat);
   }
   
   )
*/
    getPollution().then(data =>{
        this.setState({
        isLoading: false,
        data: data.list
        });

     }, error => {
        Alert.alert('Error', 'Error!');
     }
     
     )


 }
 
 render(){

  // show waiting screen when json data is fetching
  if(this.state.isLoading) {
    return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
  }

   
  return(
    
<View style={styles.container} onStartShouldSetResponder={() => true}>    
      <FlatList
        data={this.state.data}
        renderItem={({item}) => {
          return (
            <View style={styles.containerInner}>

             <View style={styles.box} >
                <Text style={styles.boxLabel}> Air Quality Index </Text>
                <Text style={styles.boxLabel}> Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor. </Text>
                <Text style={styles.boxText}>{item.main.aqi} </Text>
              </View>

              <View style={styles.box} >
                <Text style={styles.boxLabel}> Сoncentration of Carbon monoxide </Text>
                <Text style={styles.boxText}>{item.components.co} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of Nitrogen monoxide</Text>
                <Text style={styles.boxText}> {item.components.no} μg/m3</Text>
              </View>
             
              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of Nitrogen dioxide</Text>
                <Text style={styles.boxText}> {item.components.no2} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of Ozone</Text>
                <Text style={styles.boxText}> {item.components.o3} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}>  Сoncentration of Sulphur dioxide</Text>
                <Text style={styles.boxText}> {item.components.so2} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of PM2.5 (Fine particles matter)</Text>
                <Text style={styles.boxText}> {item.components.pm2_5} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of PM10 (Coarse particulate matter)</Text>
                <Text style={styles.boxText}> {item.components.pm10} μg/m3</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.boxLabel}> Сoncentration of NH3 (Ammonia)</Text>
                <Text style={styles.boxText}> {item.components.nh3} μg/m3</Text>
              </View>
               
               </View>
            
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
 
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    alignItems: 'center'
  },
  boxLabel: {
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  image: {
    width: 50,
    height: 40,
    alignContent: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch'
  }
});