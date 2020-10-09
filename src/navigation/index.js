import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import UserSelectionPage from '../screens/UserSelectionPage'
import PetsPage from '../screens/PetsPage'
import SelectOptionPage from '../screens/SelectOptionPage'

const StackNavigator = createStackNavigator(
  {
    UserSelection: {
      screen: UserSelectionPage
    },
    PetsPage:{
      screen: PetsPage
    },
    SelectOptionPage:{
      screen: SelectOptionPage
    }
  },
  {
    initialRouteName: 'UserSelection',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
