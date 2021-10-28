/*
  Profile.js is a demo of using the Asynchronous Storage...
  It looks up your name and email and other info from async storage
  and puts it on the page. It also lets you update this info.

  Before loading this app you need to install async-storage with
  npm install @react-native-async-storage/async-storage
  Here is a link to the documentation:
  https://react-native-async-storage.github.io/async-storage/docs/api
*/
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable, Input} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "react-native-reanimated";

const Profile = (props) => {
  const [info, setInfo] = useState({note:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')
  const [note,setNote] = useState('')
  const [disguise, setDisguise] = useState('')
  const [timesPressed, setTimesPressed] = useState(0);


  // when the component is loaded it gets the data from storage
  // and updatges the info, name, and email fields
  // but this is the only time useEffect is called
  useEffect(() => {getData()}
           ,[])

  // getData uses AsyncStorage to access the stored profile info as a string
  // then it uses JSON.parse to turn that string to a JSON object
  // finally it uses the set functions for the useState hook to set the
  // info, email, and name state variables.
  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@profile_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setInfo(data)
            setName(data.name)
            setEmail(data.email)
            setDisguise(data.disguise)
            setNote(data.note)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
            setDisguise("")
            setNote("")
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  // storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@profile_info', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  // clearAll calls AsyncStorate.clear to remove all local storage for this app
  // we could be more selective and only remove the profile_info, but for
  // debugging it is good to remove everything
  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }





      return (
            <View style={styles.container}>
              <Text style={styles.header}>
                 Write a secret note!
              </Text>
              {/* text on the left side */}
              <Text style={styles.header}>
               Name: {name}
              </Text>
              <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note : disguise}
          </Text>
        )}
      </Pressable>
              {/* <Text style={styles.header}>
               Email: {email}
              </Text> */}
              <View style={styles.inputs}>
              <TextInput
                    style={styles.textinput}
                    placeholder="name"
                    onChangeText={text => {
                      setName(text)
                    }}
                    value={name}
                />
              {/* <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    onChangeText={text => {setEmail(text)}}
                    value={email}
                /> */}
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise}
                    value={disguise}
                    placeholder="disguise"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="secret"
                    onChangeText={setNote}
                    value={note}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>
                <View style={styles.buttons}>
              <Button
                    color='green' title='Save secret note'
                    onPress = {() => {
                         console.log("saving profile");
                         //for LOADING
                         const theInfo = {name:name, email:email, disguise:disguise, note:note}
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         storeData(theInfo)
                       }}
                />
                </View>
                <View style={styles.buttons}>
              <Button
                  color='red' title='Delete note'
                  onPress = {() => {
                        console.log('clearing memory');
                        clearAll()
                      }}
                />
                </View>
                <View style={styles.buttons}>
              <Button
                  color='grey' title='Load secret note'
                  onPress = {() => {
                        console.log('loading profile');
                        getData()
                      }}
                />
                </View>
                {/* <View style={styles.buttons}>
                <Button
                  color='purple' title='color'
                  onPress = {() => {
                      }}
                />
                </View> */}
              
              {/* <Text style={styles.secret}>
               info={JSON.stringify(info)}
              </Text> */}

            </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'left',
      padding: '10px',
    },
    buttons:{
      margin: 10,
      width: '20%',
    },
    inputs:{
      marginTop: 200,
      width: '40%',
    },
    textinput:{
      margin:10,
      fontSize:20,
      borderColor:'black',
      borderWidth:'2px',
      width: '40%',
      borderRadius:'10px'
    },
    noteinput:{
      multiline : true,
      numberOfLines : 4,
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      // color:'blue'
    },
    secret: {
      fontSize:40,
      color:'white'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    green: {
      color:'green'
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9'
    }
  });

export default Profile;