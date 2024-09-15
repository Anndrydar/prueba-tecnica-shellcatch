import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function JokeScreen() {
  const [joks,setJoks] = useState([]);

  const api = () => {
    axios.get("https://api.chucknorris.io/jokes/random").
    then(response=>setJoks([response.data]))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    api
  },[]);

  const renderJoksCard = ({item})=>{
    return(
        <View style={styles.card}>
            <Text style={styles.value}>{item.value}</Text>
        </View>
    )
  }
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Jokes</Text>
      <FlatList
        data={joks}
        keyExtractor={(item) => item.id}
        renderItem={renderJoksCard}
      />
     <TouchableOpacity style={styles.button} onPress={api}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/cambio.png')}
      />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
    },
    titulo:{
        textAlign: 'center',
        marginVertical: 10,    
        paddingHorizontal: 20,
        fontSize:20
    },
    card: {
      padding: 15,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    value: {
        fontSize: 18,   
        fontWeight: 'bold', 
        color: '#333',      
        textAlign: 'center',  
        letterSpacing: 1,   
        lineHeight: 24,      
        marginVertical: 10,    
        paddingHorizontal: 20,       
        textTransform: 'capitalize',   
      },
    button: {
        width: 30,
        height: 30, 
        justifyContent: 'center',
        alignItems: 'center',  
        borderRadius: 25, 
        backgroundColor: '#f0f0f0', 
        elevation: 3,    
      },
      tinyLogo: {
        width: 30,       
        height: 30,       
        resizeMode: 'contain', 
      },
  });