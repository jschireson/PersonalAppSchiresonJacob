/*
  Social.js is a demo of using the Asynchronous Storage...
  It looks up your name and email and other info from async storage
  and puts it on the page. It also lets you update this info.

  Before loading this app you need to install async-storage with
  npm install @react-native-async-storage/async-storage
  Here is a link to the documentation:
  https://react-native-async-storage.github.io/async-storage/docs/api
*/
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image, Pressable, Input, ScrollView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from "react-native-reanimated";

const Social = (props) => {
  const [info, setInfo] = useState({note:''});
  const [name, setName] = useState('');
  const [email,setEmail] = useState('')
  const [note,setNote] = useState('')
  const [disguise, setDisguise] = useState('')
  const [note2,setNote2] = useState('')
  const [disguise2, setDisguise2] = useState('')
  const [note3,setNote3] = useState('')
  const [disguise3, setDisguise3] = useState('')
  const [note4,setNote4] = useState('')
  const [disguise4, setDisguise4] = useState('')
  const [note5,setNote5] = useState('')
  const [disguise5, setDisguise5] = useState('')
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
            setDisguise2(data.disguise2)
            setNote2(data.note2)
            setDisguise3(data.disguise3)
            setNote3(data.note3)
            setDisguise4(data.disguise4)
            setNote4(data.note4)
            setDisguise5(data.disguise5)
            setNote5(data.note5)
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            setInfo({})
            setName("")
            setEmail("")
            setDisguise("")
            setNote("")
            setDisguise2("")
            setNote2("")
            setDisguise3("")
            setNote3("")
            setDisguise4("")
            setNote4("")
            setDisguise5("")
            setNote5("")
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
        <ScrollView>
            <View style={styles.container}>
              <Text style={styles.header}>
                 Social Media Passwords
              </Text>
              {/* text on the left side */}
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
      <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note2 : disguise2}
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note3 : disguise3}
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note4 : disguise4}
          </Text>
        )}
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note5 : disguise5}
          </Text>
        )}
      </Pressable>
             
              <View style={styles.inputs}>
                <Text>Platform 1</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise}
                    value={disguise}
                    placeholder="Platform"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="password"
                    onChangeText={setNote}
                    value={note}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>
                <View style={styles.inputs}>
                <Text>Platform 2</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise2}
                    value={disguise2}
                    placeholder="Platform"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="password"
                    onChangeText={setNote2}
                    value={note2}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>
                <View style={styles.inputs}>
                <Text>Platform 3</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise3}
                    value={disguise3}
                    placeholder="Platform"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="password"
                    onChangeText={setNote3}
                    value={note3}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>
                <View style={styles.inputs}>
                <Text>Platform 4</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise4}
                    value={disguise4}
                    placeholder="Platform"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="password"
                    onChangeText={setNote4}
                    value={note4}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>
                <View style={styles.inputs}>
                <Text>Platform 5</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={setDisguise5}
                    value={disguise5}
                    placeholder="Platform"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textinput}
                    placeholder="password"
                    onChangeText={setNote5}
                    value={note5}
                    // multiline={true}
                    // numberOfLines={4}
                    
                />
                </View>

                <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
              <Button
                    color='green' title='Save secret note'
                    onPress = {() => {
                         console.log("saving profile");
                         //for LOADING
                         const theInfo = {name:name, email:email, 
                          disguise:disguise, note:note, 
                          disguise2:disguise2, note2:note2, 
                          disguise3:disguise3, note3:note3, 
                          disguise4:disguise4, note4:note4, 
                          disguise5:disguise5, note5:note5}

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
                </View>

            </View>
            </ScrollView>
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
      marginTop: 20,
      width: '80%',
    },
    textinput:{
      margin:10,
      fontSize:20,
      borderColor:'black',
      borderWidth:'2px',
      width: '100%',
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

export default Social;