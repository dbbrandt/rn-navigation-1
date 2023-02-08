import { useEffect } from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "./categoriesScreen";
import MealsOverviewScreen from "./mealsOverviewScreen";
import MealDetailScreen from "./mealDetailScreen";
import IconButton from "../components/iconButton";
import FavoritesScreen from "./favoritesScreen";
import {CommonActions, StackActions} from "@react-navigation/native";
// import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function MealsHomeScreen({route, navigation}) {
    const { initialRoute, favoriteMeals } = route.params;

    function headerButtonPressHandler() {
        navigation.openDrawer();
    }

    useEffect(() => {
        const goHome = route.params.goHome;
        // Verify we don't pop the stack if we are already at the top (i.e. canGoBack).
        if (goHome && navigation.canGoBack()) {
            navigation.dispatch(CommonActions.setParams({ goHome: false }));
            navigation.dispatch(StackActions.popToTop());
        }
    }, [route, navigation])

    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            initialParams={{favoriteMeals: favoriteMeals}}
            screenOptions={{
                headerStyle: {backgroundColor: '#622a09'},
                headerTintColor: 'white',
                contentStyle: {backgroundColor: '#412b1c'},
            }}>
            <Stack.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                initialParams={{
                    favoriteMeals: favoriteMeals,
                }}
                options={{
                    title: 'All Categories',
                    headerLeft: () => {
                        return <IconButton icon='home' color='white' onPress={headerButtonPressHandler}/>
                    }
                }}
            />
            <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
                initialParams={{
                    favoriteMeals: favoriteMeals,
                }}
                options={{
                    contentStyle: {backgroundColor: '#d4ae95'}
                }}

        />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
            <Stack.Screen name='Favorites'
                          component={FavoritesScreen}
                          initialParams={{
                              favoriteMeals: favoriteMeals,
                          }}
                          options={{
                              title: 'Favorites',
                              contentStyle: {backgroundColor: '#d4ae95'},
                              headerLeft: () => {
                                  return <IconButton icon='home' color='white' onPress={headerButtonPressHandler}/>
                              }
                          }}
            />

        </Stack.Navigator>
    )
}

export default MealsHomeScreen;