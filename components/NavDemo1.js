import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import FlexDemo1Screen from './FlexDemo1'
import AboutScreen from './About'
import GradingScreen from './Grading'
import Social from './Social'
import School from './School'
import Other from './Other'

// import testingScreen from './testing'
import { strict } from 'yargs';

// const testing = () =>{
//   return(
//     <View>
//       <Text>
//         hello
//       </Text>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Password Manager"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="School" component={School} />
        <Stack.Screen name="Other" component={Other} />


        {/* <Stack.Screen name="About" component={ProfileScreen} /> */}

        <Stack.Screen name="FlexDemo1" component={FlexDemo1Screen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Grading" component={GradingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (

      <View style={{ flexDirection: 'column',
                     margin:"25px",
                    //  borderTopColor: "black",
                    //  borderTopWidth: "2px",
                     padding:'10px',
                    //  position: "absolute",
                    //  bottom: 0,
                    //  width: "-webkit-fill-available",
                     justifyContent: 'space-around',
                    }}>


        

        <Text style={{fontSize:40}}>
          School
        </Text>

        <View style={{marginBottom:'40px'}}>
        <Button
          title="Brandeis Passwords"
          onPress={() =>
            navigation.navigate('School')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />
        </View>

        <Text style={{fontSize:40}}>
          Social
        </Text>
      <View style={{marginBottom:'40px'}}>
        <Button
          title="Social Media Passwords"
          onPress={() =>
            navigation.navigate('Social')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />
        </View>

        <Text style={{fontSize:40}}>
          Other
        </Text>
        <View style={{marginBottom:'40px'}}>
        <Button
          title="Other Important Info"
          onPress={() =>
            navigation.navigate('Other')
          }
        />
        </View>


    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: 'green',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:64,
    padding:25,
    color:"red",
  },
  buttons:{
    marginBottom:20,
  }
});

// Social function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
// const Social = ({ navigation, route }) => {
//   return <View><Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>
//   <Text>hi</Text>
//   </View>;
  
//        // we're using the parameter name passed in from the HomeScreen
// };

export default MyStack;
