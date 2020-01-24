import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import UserSelectionPage from '../screens/UserSelectionPage'
import Map from '../screens/Map'
import PetsPage from '../screens/PetsPage'

const StackNavigator = createStackNavigator(
  {
    UserSelection: {
      screen: UserSelectionPage
    },
    Map: {
      screen: Map
    },
    Pets:{
      screen: PetsPage
    }
  },
  {
    initialRouteName: 'UserSelection',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
