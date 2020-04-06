import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigator/stack'
import * as React from 'react';


import Incidents from './Incidents'
{/*import Detail from './Detail'*/}

const AppStack = createStackNavigator();

export default  function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown:false }}>

                <AppStack.Screen name="Incidents" component={Incidents} />
                {/*<AppStack.Screen name="Detail" component={Detail} />*/}
                
            </AppStack.Navigator>
        </NavigationContainer>

    );
}