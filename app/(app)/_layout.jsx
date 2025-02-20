import { Redirect, Stack } from "expo-router"
import { useSelector } from "react-redux"

const AppLayout =() => {
  const onboarding = useSelector((state) => state.utils.hasSeenOnboarding)
  console.log(onboarding)

  if(!onboarding){
    return(
      <Redirect href={'/onboarding/appboarding'} />
    )
  }
  return (
         <Stack>
             <Stack.Screen name={"(tabs)"} options={{headerShown: false}}/>
         </Stack>
     )
}

export default AppLayout
