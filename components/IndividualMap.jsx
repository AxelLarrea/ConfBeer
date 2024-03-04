import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker} from "react-native-maps";


const IndividualMap = ({latitud, longitud, nombre}) => {
    return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center", marginTop:30}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -32.48,
          longitude: -58.24,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
            pinColor="#f52c1d"
            coordinate={{
            latitude: parseFloat(latitud),
            longitude: parseFloat(longitud),
        }}>
          <Callout>
            <View style={{ padding:10 }}>
              <Text>{nombre}</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
    );
}

const styles = StyleSheet.create({
  map: {
    width: 390,
    height: 200,
  },
});

export default IndividualMap;