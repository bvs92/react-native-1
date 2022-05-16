

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Restaurant from './src/screens/Restaurant';

// export default function App() {

//   return (
//     <SafeAreaView>
//       <Home />
//     </SafeAreaView>
//   );
// }

const navigator = createStackNavigator({
  Home,
  Restaurant
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "BusinessSearch"
  }
});

export default createAppContainer(navigator);