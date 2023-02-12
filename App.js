import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View,} from 'react-native';
import {NavigationContainer, CommonActions} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import MealsHomeScreen from "./screens/mealsHomeScreen";
// import FavoritesContextProvider from "./store/context/favoritesContext";
import { Provider } from 'react-redux';
import { store } from "./store/redux/store";

import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Provider store={store}>
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
                        <Drawer.Screen name='Meals'
                                       component={MealsHomeScreen}
                                       initialParams={{
                                           initialRoute: 'MealsCategories',
                                           goHome: false,
                                       }}
                                       listeners={({navigation, route}) => ({
                                           drawerItemPress: (e) => {
                                               navigation.dispatch(CommonActions.setParams({goHome: true}));
                                           }
                                       })}
                                       options={{
                                           drawerIcon: ({color, size}) =>
                                               <Ionicons name="book" color={color} size={size}/>
                                       }}
                        />
                        <Drawer.Screen name='FavoritesHome'
                                       component={MealsHomeScreen}
                                       initialParams={{
                                           initialRoute: 'Favorites',
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
        </Provider>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 60,
    },
});
