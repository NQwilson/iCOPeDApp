import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import HomeButton from '../components/HomeButton';






const WeatherScreen2 = ({navigation}) => {
    const theme = useTheme();
  
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
        <View style={styles.sliderContainer}>
            
        <View style={styles.slide}>
              
            <ImageBackground 
                source={require('../assets/banner/Mountains-Area-1.png')}
                resizeMode="cover"
                style={styles.sliderImage}>
             <Text style={styles.cardDetails}>
              The overall weather condition
              for your COPD looks stable. 
              Why not take a walk? 
              </Text>
              <Text style={styles.cardDetails}>
              The overall weather condition
              for your COPD looks stable. 
              Why not take a walk? 
              </Text>
            </ImageBackground>
        </View>
        </View>
     
        <View style={styles.cardsWrapper}>

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
  
          <View style={styles.card}>
          
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Weather</Text>
              
              <Text style={styles.cardDetails}>
              The overall weather condition
              for your COPD looks stable. 
              Why not take a walk? 
              </Text>
  
              <Text style={styles.cardDetailsLink}
               onPress={() => Linking.openURL('http://google.com')}>
               Read more
              </Text>
            </View>
  
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banner/Weatherman.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
          </View>
  
  
          <View style={styles.card}>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Reminders</Text>
              
              <Text style={styles.cardDetails}>
              You have an upcoming 
              dose of pulmnicort at 
              4:00 pm today!
              </Text>
  
              <Text style={styles.cardDetailsLink}
               onPress={() => Linking.openURL('http://google.com')}>
               Read more
              </Text>
            </View>
  
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banner/Waiting.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            </View>
            <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Predictions
        </Text>
            <View style={styles.card}>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Reports</Text>
              
              <Text style={styles.cardDetails}>
              Your report for the week 
              of Feb 27, 2021 is good. 
              </Text>
  
              <Text style={styles.cardDetailsLink}
               onPress={() => Linking.openURL('http://google.com')}>
               Read more
              </Text>
            </View>
  
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banner/Segment.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            </View>
  
  
            <View style={styles.card}>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Contact your iCOPeD Coach</Text>
              
              <Text style={styles.cardDetails}>
              Communication with 
              your healthcare professional 
              is a button away!
              </Text>
  
              <HomeButton
              buttonTitle="Go to iCOPeD Coach"
              onPress={() => navigation.navigate('Weather')}
              />
            </View>
  
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banner/Counseling.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            </View>
  
            <View style={styles.card}>
          <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Contact your Doctor</Text>
              
              <Text style={styles.cardDetails}>
              Communication with 
              your personal doctor 
              is a button away!
              </Text>
              
              <HomeButton
              buttonTitle="Go to my Doctor"
              onPress={() => navigation.navigate('Weather')}
              />
            </View>
  
            <View style={styles.cardImgWrapper}>
              <Image
                source={require('../assets/banner/standing.png')}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            </View>
  
        </View>
      </ScrollView>
    );
  };
  
  export default WeatherScreen2;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e6f2f2',
    },
    sliderContainer: {
      height: 280,
      width: '100%',
      marginTop: 0,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 150,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
  
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 0,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 10,
      backgroundColor: '#fff',
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 0,
      borderLeftWidth: 0,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor: '#fff',
    },
    cardTitle: {
      padding: 15,
      fontWeight: 'bold',
    },
    cardDetails: {
      padding: 0,
      paddingLeft:15,
      fontSize: 12,
      color: '#444',
    },
  
    cardDetailsLink: {
      padding: 0,
      paddingLeft:15,
      paddingTop:15,
      fontSize: 12,
      color: 'blue',
      textDecorationLine: 'underline',
    },
    
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: '100%',
      backgroundColor: '#87ceeb',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
    },
    
  });