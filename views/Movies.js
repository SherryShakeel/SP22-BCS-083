import React, {useState, useEffect} from 'react';
// import * as React from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Axios from 'react-native-axios/lib/core/Axios';
import axios from 'axios';
import { View , Text,TouchableOpacity,StyleSheet} from "react-native";
import { FlatList } from 'react-native-gesture-handler';

//import GetApiHook from './GetApiHook';
//import { colorSpace } from '@cloudinary/url-gen/actions/delivery';





// **************************************************************** Main ********************************




export default function Practice ({navigation,route}){
    
    
    // ************************************************* Declarations ******************************************
   
    const [dataa,setData] = useState([])
    const [dataSource,setDataSource] = useState()



    useEffect(() =>{
        console.log("Inside useEffect [] ")

        // Checking if movies data is in local db
        AsyncStorage.getItem('mooviies').then(async (data) => {

            if(data){
                
                let parsedData=JSON.parse(data);
                console.log("Data found in local db : " , parsedData)
                setData(parsedData)
                setDataSource('Local DB')
            }

            // if data is not in local db , fetching from API and storing it  in local db
            else{
               
                // setData( GetApiHook(url))
                axios.get('https://reactnative.dev/movies.json').then((response)=>{
                  
                    setData(response.data.movies);
                    console.log("Data from Get API ==> " ,response.data.movies);
                    setDataSource('API')
                    AsyncStorage.setItem('mooviies',JSON.stringify(response.data.movies))
                    console.log('Data state stored successfully in local db ')
                    }).catch(err => console.log(err))
            }
}).catch( error => console.log(error))
},[])

useEffect(() =>{
        console.log("Inside useEffect [data]")
        
       
    },[dataa])

   

    //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ RETURN() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    return( 
       
       

       <View>
        {/* <View style={{flex:0.8,borderWidth:2,borderColor:'blue',height:800,width:'100%'}}> */}

        <FlatList
      horizontal={false}
      data={dataa}
      keyExtractor={item=>item.id}
      renderItem={({item })=>(


      <TouchableOpacity  >

        <View style={styles.container}>
        
        <View style={styles.left}>
        <Text style={{color:'red' , fontWeight:'500' , fontSize:15}}>{item.title}</Text>
        </View>

        <View style={styles.middle}>

        <Text >  Relesased in {item.releaseYear} </Text>

        </View>

       

      </View>
      </TouchableOpacity>
    )}/>
        {/* </View> */}

        <Text style={{margin:20,alignContent:'center',marginLeft:60,color:'green',fontSize:18,fontWeight:'500'}}> Data fetched from {dataSource}</Text>
      
       </View>

     
)}

const styles = StyleSheet.create({
    texts: {
        color:'white',
        fontSize:12
    },
    swipeText:{
      color:'white',
      fontSize:5,
    },
    container: {
        backgroundColor:'white', 
    //   marginBottom:10,
      borderBottomWidth:0.5,
      borderBottomColor:'grey',
      height:80, 
      flex:1,
      flexDirection:'row'
      },


      left:{
        flex:0.40, 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:3,
        // borderWidth:2,
        // borderColor:'red'
      },


    middle : {
        flex:0.60, 
        // backgroundColor:'grey',
        justifyContent:'center',
        
    },
    right : {
        flex:0.25,
        //  backgroundColor:'green',
          alignItems:'flex-end',
          padding:10
        },

   
   
    
});

