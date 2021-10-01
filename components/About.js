
import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
              <Text style={styles.header}>
                 About
              </Text>
            <TextInput style={{fontSize:32, borderColor: 'black', borderWidth: '2px', margin: '10px', flex:5, borderRadius:10}}
                        placeholder="Email" />
            <TextInput style={{fontSize:32, borderColor: 'black', borderWidth: '2px', margin: '10px', flex: 5, borderRadius:10}}
                        placeholder="Password" />
            <Image
        style={styles.tinyLogo}
        source={{uri:'https://image.shutterstock.com/image-photo/one-worlds-best-loved-dog-260nw-1621129573.jpg'}}
      />
            
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:160,
    padding:25,
    color:"pink",
  },
  vertical: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'green',
  },
  horizontal: {
    flex:1,
    flexDirection:'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'pink',
  },
  upperLeft:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderWidth: '5pt',
    flexDirection:'row',
  },
  centered:{
    flex:1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    borderWidth: '5pt',
    borderColor: 'red',
    padding:'10px',
    margin:'20px',
  },
  lowerRight:{
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderWidth: '5pt',
    flexDirection:'row',
  },
  input:{
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formBox:{
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor:'#fffff5',
  },
  tinyLogo: {
    width: 500,
    height: 500,
    borderRadius: 50,
    margin: 'auto',
  },
});
