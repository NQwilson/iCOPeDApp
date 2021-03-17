import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const EnterScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/1st.png')} />,
            title: 'Welcome to',
            subtitle: 'iCOPeD',
          },
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/2nd.png')} />,
            title: 'Compatible',
            subtitle: 'Managing your health should be easy and we make sure you can do so.',
          },
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/3rd.png')} />,
            title: 'Innovative',
            subtitle: "Bringing telemedicine at your fingertips.",
          },
          {
            backgroundColor: '#ffffff',
            image: <Image source={require('../assets/4th.png')} />,
            title: 'Interactive',
            subtitle: "Personalizing care to your needs, with the help of health-care professionals local to abroad.",
          },
        ]}
      />
    );
};

export default EnterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});