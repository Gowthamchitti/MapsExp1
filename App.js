import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Page from './Componenets/Page';
import Location from './Componenets/Loaction';
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Page}/>
        <Stack.Screen name='Location' component={Location}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

