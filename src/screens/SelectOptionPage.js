import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image, ImageBackground } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

function SelectOptionPage({ navigation }) {
  return (
    <>

      <View style={styles.container}>
        <Title style={styles.title}>Servicios</Title>
        <View style={styles.card}>
          <ImageBackground source={require('../../assets/Adopciones.png')} style={styles.backgroundImage}>
          <Title style={styles.ImageTitle}>Adopciones</Title>
          </ImageBackground>
        </View>
        <View style={styles.card}></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  card: {
    height: Dimensions.get('window').height / 2.5,
    borderRadius: '25px',
    border: '2px solid #73AD21',
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },
  title: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: "white"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: "width"
  }
})


export default SelectOptionPage
