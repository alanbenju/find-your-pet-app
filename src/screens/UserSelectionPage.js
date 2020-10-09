import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, Avatar, Button } from 'react-native-paper'


// add the following statement
import Header from '../components/Header'
/*
 <FAB
          style={styles.fab}
          small
          icon='plus'
          label='Add new note'
          onPress={() => navigation.navigate('Pets')}
        />
        
        
        */

/**
 * 
<Button style={styles.fab} mode="contained" onPress={() => navigation.navigate('MapPage', {
    title: foundPetTitle
  })}>
    {foundPetButtonText}
  </Button>
  <Button style={styles.fab} mode="outlined" onPress={() => navigation.navigate('MapPage', {
    title: lostPetTitle
  })}>
    {lostPetButtonText}
  </Button>
 */

function UserSelectionPage({ navigation }) {
  const foundPetTitle = "Donde lo encontraste?"
  const lostPetTitle = "Donde se perdio?"
  const foundPetButtonText = "Encontre una mascota"
  const lostPetButtonText = "Busco a mi mascota"

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Avatar.Image size={200} source={require('../../assets/logo-200x200.png')} />
        </View>
        <View style={styles.viewContainer}>
          <Button style={styles.fab} mode="contained" onPress={() => navigation.navigate('LoginPage')}>
            {"Iniciar sesion"}
          </Button>
          <Button style={styles.fab} mode="outlined" onPress={() => navigation.navigate('SignupPage')}>
            {"Registrarse"}
          </Button>
          <Button style={styles.fab, styles.textButton} mode="text" onPress={() => navigation.navigate('SelectOptionPage')}>
            {"En otro momento"}
          </Button>

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  },
  fab: {
    margin: 20,
    right: 0,
    bottom: 10,
    width: 300,
    fontFamily: 'sans-serif'
  },
  textButton: {
    fontSize: 11
  }
})


export default UserSelectionPage
