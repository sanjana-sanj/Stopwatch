import React,{Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasic  extends Component{
  render(){
    return(
      <View style={StyleSheet.container}>
        <SectionList
        sections={[
          {title:'A',data: ['ARUN','AMRUTHA','ANITHA']},
          {title:'B',data: ['BARUN','BANU','BHARATH']},
          {title:'C',data: ['CAVERI','CAMEL','CAR']},
        ]}
    renderItem={({item}) => <Text style={styles.item}>{item}</Text>} 
    renderSectionHeader={({section}) => <Text style={styles.SectionHeader}>{section.title}</Text>} 
     keyExtractor={(item,index) => index}
     />
     </View>
    );
      }
    }
   const styles = StyleSheet.create({
     container: {
       flex:1,
       backgroundColor: "#5ead97"
     },
     SectionHeader:{
       paddingTop:2,
       paddingLeft:10,
       paddingRight:10,
       paddingBottom:2,
       fontSize: 24,
       fontWeight:'bold',
       color:'#fff',
       backgroundColor:'#8fb1aa',
     },
     item:{
       padding:10,
       fontSize:18,
       height:44,
     }
   })
      renderSeparator = ()=>{
        return(
          <View
          style={{
            height:1,
            width:'100%',
            backgroundColor:"#000",
          }}
          />
        );
      };
      