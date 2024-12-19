import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes';
import Home from '../features/dashboard/screens/Home';
import Profile from '../features/profile/screens/Profile';
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
