import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsHomeScreen from "./screens/mealsHomeScreen";
import FavoritesOverviewScreen from "./screens/favoritesOverviewScreen";

const Drawer = createDrawerNavigator();
const favoriteMeals = ['m1','m2','m3'];

export default function App() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='FavoritesOverview'
                    screenOptions={({
                        headerShown: false
                })}>
                    <Drawer.Screen name='Home'
                                   component={MealsHomeScreen}
                                   initialParams={{
                                       initialRoute: 'MealsCategories',
                                       favoriteMeals: favoriteMeals
                                   }}
                    />
                    <Drawer.Screen name='FavoritesHome'
                                   component={MealsHomeScreen}
                                   initialParams={{
                                       initialRoute: 'Favorites',
                                       favoriteMeals: favoriteMeals
                                   }}
                                   options={{ drawerLabel: 'Favorites' }}
                    />

                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 60,
    },
});
