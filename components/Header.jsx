import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { fb_auth } from "../firebase-config";

const Header = () => {
  return (
      <View style={styles.container}>
        <View style={styles.img_cnt}>
          <Image source={require("../assets/Logo.png")} style={styles.logo} />
        </View>
        <Pressable style={styles.btn_logout} onPress={() => fb_auth.signOut()}>
          <Image source={require("../assets/logout.png")} style={styles.logout_logo} />
        </Pressable>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    zIndex: 10000,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7D451B",
    height: 100,
    width: "100%",
    marginTop: 30,
    marginBottom: 10,
    paddingRight: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 3
  },
  img_cnt: {
    marginLeft: 3,
    justifyContent: "center"
  },
  logo: {
    height: 80,
    width: 100,
    alignSelf: "center",
  },
  btn_logout: {
    backgroundColor: '#e1d4c0',
    marginRight: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logout_logo: {
    height: 30,
    width: 30,
    alignSelf: "center",
  },
  text: {
    color: 'black'
  }
});

export default Header;