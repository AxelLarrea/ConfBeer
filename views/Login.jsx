import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, Pressable, Alert, Image} from 'react-native';
import React, { useState } from 'react';
import { fb_auth } from '../firebase-config'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [isLogin, setisLogin] = useState(true);
  const auth = fb_auth;


  // Iniciar sesión con email y password
  const signIn = async () => {
    if ([email, password].includes("")) {
      return Alert.alert("Debes completar ambos campos");
    }
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      Alert.alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }  

  // Registrarse con email y password
  const signUp = async () => {
    if ([email, password].includes("")) {
      return Alert.alert("Debes completar ambos campos");
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(response);
    } catch (error) {
      // console.log(error);
      Alert.alert('Sign up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <View style={styles.container}>

      <View style={styles.img_cnt}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      </View>

      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

      {
        loading ? <ActivityIndicator size="large" color="#0000ff"/> : 
        <>
         
          <View style={styles.btn_cnt}>
            {
              isLogin ? <Button color='#7D451B' title="Iniciar sesión" onPress={signIn}/> :
              <Button color='#7D451B' title="Crear cuenta" onPress={signUp}/>
            }
          </View>
          
          <Pressable style={styles.text_cnt}>
            <Text style={styles.text} onPress={() => setisLogin(!isLogin)}>{isLogin ? "No tienes una cuenta? Registrate" : "Ya tienes una cuenta? Inicia sesión" }</Text>
          </Pressable>

          <Pressable style={styles.text_cnt}>
            <Text style={styles.text}>Recuperar contraseña</Text>
          </Pressable>
        </>
      }

      {/* <View>
        <signInWithPopup></signInWithPopup>
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#e1d4c0',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 20,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff'
  },
  text_cnt: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#003366'
  },
  btn_cnt: {
    marginHorizontal: 20,
    borderRadius: 5
  },
  img_cnt: {
    justifyContent: 'center',
    width: '95%',
    paddingBottom: 20
  },
  logo: {
    height: 200,
    width: 300,
    alignSelf: 'center',
  }

})


export default Login;