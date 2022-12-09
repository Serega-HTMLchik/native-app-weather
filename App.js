import { NavigationContainer } from '@react-navigation/native'
import CityScreen from './Screen/CityScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { store } from './Redux/store';
import { Provider } from 'react-redux';


const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
      {/* <MoscowScreen /> */}
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, unmountOnBlur: true }}>
          <Tab.Screen name="Москва" children={() => <CityScreen cityProps="msc" />} />
          <Tab.Screen name="Воронеж" children={() => <CityScreen cityProps="vrn" />} />
          <Tab.Screen name="Ростов-на-Дону" children={() => <CityScreen cityProps="rnd" />} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}






