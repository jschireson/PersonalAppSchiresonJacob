import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
/*
import {View} from 'react-native';
import NavDemo1 from './components/NavDemo1'
import Quiz1 from './components/Quiz1.js'
import Quiz1a from './components/Quiz1a.js'
import Grading from './components/Grading.js'
import PropDemo from './components/PropDemo.js'
import TipCalculator from './components/TipCalculator.js'
import Counter from './components/Counter.js'
import ListDemoScreen from './components/ListDemoScreen'
//import CovidDemo from './components/CovidDemo'
import PhotoId from './components/PhotoId'
import ShowPage from './components/ShowPage'

import ShowPage from './components/ShowPage'
import Counter from './components/Counter.js'
import WebViewer from './components/WebViewer'
*/
import Social from './components/Social'
import Pomodoros from './components/Pomodoros'
import WebViewer from './components/WebViewer'
import NavDemo1 from './components/NavDemo1'
// import NavDemo1copy from './components/NavDemo1copy'
import NavDemo2 from './components/NavDemo2'
import BBViewer from './components/BBViewer'
// import Navigator from './components/Navigator'
// import ApiView from './components/ApiView'





export default function App() {
  return (
    //<Pomodoros />
    //<WebViewer/>
    //<Social />
   <View style={styles.container}>
    {/* <NavDemo1></NavDemo1> */}
    <NavDemo1></NavDemo1>
    {/* <NavDemo2></NavDemo2> */}
    {/* <ApiView></ApiView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
