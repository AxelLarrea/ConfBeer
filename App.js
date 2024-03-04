import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import Home from './views/Home';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { fb_auth } from './firebase-config';
import Ubication from './views/Ubication';
import Details from './views/Details';
import ConfProvider from './components/ConfProvider';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={Home} options={{headerShown : false}}/>
      <InsideStack.Screen name='Ubication' component={Ubication} options={{headerShown : false}}/>
      <InsideStack.Screen name='Details' component={Details} options={{headerShown : false}}/>
    </InsideStack.Navigator>
  );
}

export default function App() {

  const [user, setUser] = useState('User');

  useEffect(() => {
    onAuthStateChanged(fb_auth, (user) => {
      console.log('User: ', user);
      setUser(user);
    })
  }, [])

  return (
    <ConfProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown : false}}/> : <Stack.Screen name='Login' component={Login} options={{headerShown : false}}/>}      
        </Stack.Navigator>
      </NavigationContainer>
    </ConfProvider>
  );
};