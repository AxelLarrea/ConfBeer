import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import IndividualMap from '../components/IndividualMap';

const Details = ({route}) => {
  const {event} = route.params;
  console.log('En Details', event);
  return (
    <View style={{flex:1 }}>
      <Header/>  
      <ScrollView style={ styles.container }>
        <View style={{ justifyContent:"center" }}>
          <Image source={ {uri : event.imagen} } style={styles.event_img}/>
          <Text style={ styles.title }>{event.nombre}</Text>
          <Text style={ styles.speaker }>Disertante: {event.disertante}</Text>
          <Text style={ {marginLeft:10, marginBottom:5, fontSize:16} }>Horario: De {event.hora_inicio}hs a {event.hora_fin}hs</Text>
          <Text style={ styles.detail }>{event.detalle}</Text>
          <IndividualMap latitud={event.latitud} longitud={event.longitud} nombre={event.nombre}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  event_img: {
    height: 200,
    width: "95%",
    alignSelf: "center",
    borderRadius: 5,
  },
  title: {
    fontSize:22, 
    fontWeight:"bold",
    marginLeft:10,
    marginBottom: 15,
  },
  speaker: {
    fontSize:16, 
    fontWeight:"500",
    marginLeft:10
  },
  detail: {
    fontSize:16, 
    fontWeight:"300",
    marginLeft:10
  }
});


export default Details;