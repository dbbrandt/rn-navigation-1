import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, } from 'react-native';
import { NavigationContainer, CommonActions  } from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsHomeScreen from "./screens/mealsHomeScreen";
import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const favoriteMeals = [];

export default function App() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='FavoritesOverview'
                    conentOptions={{
                        activeTintColor: 'white',
                        activeBackgroundColor: 'transparent',
                        inactiveTintColor: 'black',
                        inactiveBackgroundColor: 'transparent',
                    }}
                    screenOptions={({
                        headerShown: false,
                        drawerActiveTintColor: 'white',
                        drawerInactiveTintColor: '#512203',
                        drawerStyle: {
                            backgroundColor: '#b79783',
                            width: 200,
                        },
                })}>
                    <Drawer.Screen name='Home'
                                   component={MealsHomeScreen}
                                   initialParams={{
                                       initialRoute: 'MealsCategories',
                                       favoriteMeals: favoriteMeals,
                                       goHome: false,
                                   }}
                                   listeners={({navigation, route}) => ({
                                       drawerItemPress: (e) =>{
                                           navigation.dispatch(CommonActions.setParams({ goHome: true }));
                                       }
                                   })}
                                   options={{
                                       drawerIcon: ({color, size}) =>
                                           <Ionicons name="home" color={color} size={size}/>
                                   }}
                    />
                    <Drawer.Screen name='FavoritesHome'
                                   component={MealsHomeScreen}
                                   initialParams={{
                                       initialRoute: 'Favorites',
                                       favoriteMeals: favoriteMeals
                                   }}
                                   options={{
                                       drawerLabel: 'Favorites',
                                       drawerIcon: ({color, size}) =>
                                           <Ionicons name="star" color={color} size={size}/>
                                   }}

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
