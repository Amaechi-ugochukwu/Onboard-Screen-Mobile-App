import React from "react"
import { NavigationContainer  } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"


import OnBoard from "./src/screen/OnBoard"
import Home from "./src/screen/Home"


import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createStackNavigator()

export default function App() {
  const [isAppFirstLaunched , setIsAppFirstLaunched] = React.useState(null)

  React.useEffect ( async () =>{
    const appData = await AsyncStorage.getItem('isAppLaunched');

    if(appData == null ){
      setIsAppFirstLaunched(true)
      AsyncStorage.setItem('isAppFirstLaunced' , 'false')
    } else{
      setIsAppFirstLaunched(false)
    }



  },[])

  return (
    isAppFirstLaunched  != null && (
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>

    {isAppFirstLaunched && ( <Stack.Screen name="OnBoard" component={OnBoard}/> )}
    <Stack.Screen  name="Home" component={Home} />

   </Stack.Navigator>
   
   </NavigationContainer>
  )
   
  )
}
