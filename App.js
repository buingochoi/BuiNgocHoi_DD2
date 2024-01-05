import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SingleProductScreen from './src/Screens/SingleProductScreen';  
import CartScreen from './src/Screens/CartScreen';
import CartIterms from './component/CartIterms';


export default function App() {
  return (
    <NativeBaseProvider>
      <CartIterms/>
    </NativeBaseProvider>
    
  );
}