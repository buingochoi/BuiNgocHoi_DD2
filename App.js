import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import { NativeBaseProvider } from 'native-base';
import RegisterScreen from './src/Screens/RegisterScreen';


export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen/>
    </NativeBaseProvider>
    
  );
}