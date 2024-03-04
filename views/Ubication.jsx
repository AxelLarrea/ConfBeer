import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker} from "react-native-maps";
import { ConfContext } from "../components/ConfProvider";

const Ubication = () => {

  const conf = useContext(ConfContext);

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -32.48,
          longitude: -58.24,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {conf.events && conf.events.map((evento, index) => (
          <Marker key={index}
            pinColor="#f52c1d"
            coordinate={{
            latitude: parseFloat(evento.latitud),
            longitude: parseFloat(evento.longitud),
          }}>
            <Callout>
              <View style={{ padding:10 }}>
                <Text style={{ fontSize:16 }}>{evento.nombre}</Text>
              </View>
            </Callout>
            
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Ubication;
