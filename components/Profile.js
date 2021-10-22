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


  // first number
  const [num1, setNum1] = useState(6);
  // second number
  const [num2, setNum2] = useState(12);

  const [answer, setAnswer] = useState();

  // toggle showing the check button
  const [showCheckAnswer, setShowCheckAnswer] = useState(false);
  
  const [showCheckAnswer2, setShowCheckAnswer2] = useState(false);


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


  function checkUserAnswer() {
    if(showCheckAnswer == true){
      setShowCheckAnswer(false)
    }
    else{
      setShowCheckAnswer(true)
    }
  }

  function checkUserAnswer2() {
    if(showCheckAnswer2 == true){
      setShowCheckAnswer2(false)
    }
    else{
      setShowCheckAnswer2(true)
    }
  }


      return (
            <View style={styles.container}>
              <Text style={styles.header}>
                 Quiz 3
              </Text>
              <Text style={styles.subtext}>
                 CS153a Fall21
              </Text>
              <Text style={styles.subtext}>
                 Write the code for this App, including this text!
              </Text>
              <Text style={styles.subtext2}>
              Enter the radius and the height of a cylinder in inches and we will calculate the volume in gallons. A 6 inch radius and 12 inch height will have volume 5.88. Divide cubic inches by 231 to get gallons, and show only 2 digist after the decimal point in the volume. 
              </Text>
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{fontSize:20, paddingLeft: 2, backgroundColor:'pink'}}>radius: </Text>
              <TextInput
                    style={styles.textinput2}
                    // placeholder="radius"
                    onChangeText={Number => {
                      setNum1(Number)
                    }}
                    value={num1}
                />
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{fontSize:20, paddingLeft: 2, backgroundColor:'pink'}}>height: </Text>
              <TextInput
                    style={styles.textinput2}
                    // placeholder="radius"
                    onChangeText={Number => {
                      setNum2(Number)
                    }}
                    value={num2}
                />
                </View>
                
                

              {/* text on the left side */}
              {/* <Text style={styles.header}>
               Name: {name}
              </Text> */}

              {/* below is the secret text, use for components going away and staying */}
              {/* <Pressable
        style={({ pressed }) => [
          styles.header
        ]}>
        {({ pressed }) => (
          <Text style={styles.header}>
            {pressed ? note : disguise}
          </Text>
        )}
      </Pressable> */}
              {/* <Text style={styles.header}>
               Email: {email}
              </Text> */}

              
              
              <View style={{width: '40%'}} >
                <Button
                    color='green' title='CALCULATE VOLUME'
                    onPress = {() => {
                      checkUserAnswer()
                      
                       }}
                />
                </View>

                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{fontSize:20, paddingLeft: 2, backgroundColor:'pink'}}> The volume is </Text>
                <Text style={showCheckAnswer ? styles.textinput3 : styles.noDisplay}>
                {(num1 * num2)}</Text>
                <Text style={styles.textinput4}>gallons</Text>
                </View>

                <View style={{width: '50%'}} >
                <Button
                    color='dodgerblue' title='TOGGLE CALCULATIONS VIEW'
                    onPress = {() => {
                      checkUserAnswer2()
                      
                       }}
                />
                
                </View>

                <Text style={showCheckAnswer2 ? styles.textinput : styles.noDisplay}> radius: {num1} </Text>
                <Text style={showCheckAnswer2 ? styles.textinput : styles.noDisplay}> height: {num2} </Text>
                <Text style={showCheckAnswer2 ? styles.textinput : styles.noDisplay}> area of base = pi*r^2 {3.14159 * num1 * num1} </Text>
                <Text style={showCheckAnswer2 ? styles.textinput : styles.noDisplay}> volume of cylinder =  {3.14159 * num1 * num1} cubic inches</Text>
                <Text style={showCheckAnswer2 ? styles.textinput : styles.noDisplay}> volume of cylinder =  {3.14159 * num1 * num1/231} gallons </Text>

              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
               
                </View>
                
              
              {/* <TextInput
                    style={styles.textinput}
                    placeholder="email"
                    onChangeText={text => {setEmail(text)}}
                    value={email}
                /> */}
                
                
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
      // padding: '10px',
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
      // margin:10,
      fontSize:20,
      color: 'black',
      // borderColor:'black',
      // borderWidth:'2px',
      // width: '40%',
      // borderRadius:'10px'
    },
    textinput2:{
      fontSize:20,
      width: '55%',
      backgroundColor:'pink',
    },
    textinput3:{
      fontSize:20,
      width: '6%',
      backgroundColor:'pink',
    },
    textinput4:{
      fontSize:20,
      width: '13%',
      backgroundColor:'pink',
    },
    noteinput:{
      multiline : true,
      numberOfLines : 4,
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:100,
      backgroundColor:'lightgreen',
      width: '80%',
      // color:'blue'
    },
    subtext: {
      fontSize:20,
      backgroundColor:'lightgreen',
      width: '80%',
      // color:'blue'
    },
    noDisplay:{
      display: "none",
    },
    subtext2: {
      fontSize:20,
      // color:'blue'
    },
    subtext3: {
      fontSize:20,
      backgroundColor:'pink',
      width: '55%',
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