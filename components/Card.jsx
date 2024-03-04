import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Card = ({ evento }) => {
    const navigation = useNavigation();

    return (
    <>
      <View style={styles.container}>
        <View style={styles.preview_cnt}>
          <View style={styles.img_cnt}>
            <Image source={{uri : evento.imagen}} style={styles.event_img}/>
          </View>

          <View style={styles.details_cnt}>
            <Text style={styles.text}>{evento.nombre}</Text>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <View>
                <View style={styles.details_text}>
                  <Image source={require('../assets/schedule.png')} style={styles.logo}/>
                  <Text >Fecha: {evento.fecha}</Text>
                </View>
                <View style={styles.details_text}>
                  <Image source={require('../assets/time.png')} style={styles.logo}/>
                  <Text >Inicio: {evento.hora_inicio} </Text>
                </View>
              </View>

              <Pressable style={styles.btn} onPress={()=> navigation.navigate("Details", {event: evento})}>
                <Image source={require('../assets/details.png')} style={styles.btn_logo}/>
                <Text style={styles.btn_text}>Detalles</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1d4c0",
    width: "98%",
    height: 120,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5
  },
  preview_cnt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    height: 80
  },
  img_cnt: {
    justifyContent: "center",
    width: "18%",
    height: 80,
    marginLeft: 10
  },
  event_img: {
    height: 80,
    width: 80,
    alignSelf: "center",
    borderRadius: 5,
  },
  details_cnt: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    width: "80%"
  },
  btn: {
    height: 40,
    width: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7D451B",
    borderRadius: 5,
    alignSelf: "center",
    marginRight: 15
  },
  btn_logo: {
    height: 25,
    width: 25,
    alignSelf: "center",
    borderRadius: 5,
    marginRight: 10
  },
  logo: {
    height: 20,
    width: 20,
    alignSelf: "center",
    borderRadius: 5,
    marginRight: 10
  },
  btn_text: {
    color: 'white'
  },
  text: {
    fontWeight: "500",
    marginBottom: 22,
  },
  details_text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5
  }

});

export default Card;
