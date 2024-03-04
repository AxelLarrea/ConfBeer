import { useEffect, useContext } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import CardsList from "../components/CardsList";
import Header from "../components/Header";
import { getData } from "../firebase-config";
import { useNavigation } from "@react-navigation/native";
import Ubication from "./Ubication";
import { ConfContext } from "../components/ConfProvider";

const Home = () => {

  const conf = useContext(ConfContext);
  const navigation = useNavigation();

  const getEvents = async () => {
    const data = await getData();
    conf.setEvents(data);
  };  
  
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <View style={{flex: 1, backgroundColor:"white" }}>
        <Header />
        
        <Pressable style={styles.mapa} onPress={()=> navigation.navigate(Ubication)}>
          <Image source={require("../assets/street_map.png")} style={styles.map_logo} />
          <Text style={styles.text}>Mapa de conferencias</Text>
        </Pressable>
        <View style={{justifyContent: "space-between", alignItems: "center", height:"76%"}}>
          <CardsList eventos={conf.events}/>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  mapa: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    width: "98%",
    backgroundColor: "#e1d4c0",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
  text: {
    color: "black",
    fontWeight: "500"
  },
  map_logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
    borderRadius: 5,
    marginHorizontal: 10
  }
});

export default Home;
