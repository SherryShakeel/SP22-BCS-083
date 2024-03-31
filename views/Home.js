import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, SectionList } from 'react-native';

export default function Home({navigation,route}) {
  

  // ****************************************************** DECLARATIONS ********************************
  const User = route.params;
  const [back,setBack] = useState(false)
  const [fontt,setFontt] = useState(16)
  const [fc,setFc] = useState('black')
   
 
  // ****************************************************** Functions ********************************
  const onFetchMovies = () => {
    console.log("You pressed go to practice");
    navigation.navigate('Movies');

  }

useEffect ( () =>{
  console.log("use effect of home with [] ") // It gets called only once  when screen gets rendered first time so , settings are set
  global.settings = {
    fs:20,
    fc:'yellow'
  }
},[])


  useEffect( () =>{

    const unsubscribed = navigation.addListener ('focus', () =>{
      console.log(" useEffect of home on back is called wrt navigation ");
      // const font= route.params;
      // console.log("FontSize object recieved : ", font.fontSize)
      // setFontt(font.fontSize)
      setFc(global.settings.fc)
      setFontt(global.settings.fs)
    })
    return unsubscribed 
  },[navigation])


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Return() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  return (
    <View style={styles.container}>

      <View style={styles.topcontainer}>
      <Text style={{fontSize:14,color:'black',alignSelf:'center',margin:50}}> 
      Fetching Data of movies from local db. If not present then fetching from Api and then storing in local db for future fetching. </Text>
      </View>
      
      <View style={styles.midcontainer}>
        
         
      <TouchableOpacity onPress={onFetchMovies} style={{backgroundColor:'green', padding:5}}>
                <View>
                    <Text style={{ color:'white'}}> Fetch Movies </Text>
                </View>
            </TouchableOpacity>
      </View>
      <View style={styles.bottomcontainer}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  topcontainer:{
    flex:0.30,
    marginTop:50,
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent:'flex-start'
  },

  midcontainer:{
    flex:0.50,
    // backgroundColor:'blue',
    alignItems: 'center',
    // justifyContent:'center',
    // borderWidth:2,
    // borderColor:'orange',

  },
  bottomcontainer:{
    flex:0.20,
    // backgroundColor:'red',  
    alignItems: 'center',
    justifyContent:'center',
  },
  item: {
    color:'white',
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 4,
    borderRadius:12
  },
  header: {
    fontSize: 22,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
  },
  
});

