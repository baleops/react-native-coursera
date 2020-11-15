import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import ContactComponent from './ContactComponent';
import AboutComponent from './AboutComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';


const MenuNavigator = createStackNavigator({

       Menu: { screen: Menu },
       Dishdetail: { screen: Dishdetail }
  },
    { 
       initialRouteName: 'Menu',
       navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTitleStyle: {
            color: "#fff"            
        },
        headerTintColor: "#fff"  
      })
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const ContactNavigator = createStackNavigator({
  Contact: { screen: ContactComponent }
}, {
  navigationOptions: ({ navigation }) =>({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});

const AboutNavigator = createStackNavigator({
  About: { screen: AboutComponent }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: { backgroundColor: "#512DA8" },
    headerTitleStyle: { color: "#fff" },
    headerTintColor: "#fff" 
  })
});

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  About :
    { screen: AboutNavigator,
      navigationOptions:{
        title: 'About Us',
        drawerLabel: 'About Us'
      }
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },
  Contact :
    { screen: ContactNavigator,
      navigationOptions:{
        title: 'Contact Information',
        drawerLabel: 'Contact Us'
      }
    },
},{
drawerBackgroundColor: '#D1C4E9'
});


class Main extends Component {
      

  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator/>
        </View>
    );
  }
}
  
export default createAppContainer(MainNavigator);