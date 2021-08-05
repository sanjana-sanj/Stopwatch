
import React from 'react';
import{
  View,
  Text,
} from 'react-native' ;

import Home from './component/Home';
Const App = () =>{
  Const data= "some data"{
 
 return (
     <View>
         <Home data={data} />
     </View>

 );

 };
export default App;
