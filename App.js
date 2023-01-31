import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/categoriesScreen";
import MealsOverviewScreen from "./screens/mealsOverviewScreen";
import MealDetailScreen from "./screens/mealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#622a09'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#412b1c' }
                }}>
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{
                            title: 'All Categories',
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // options={( { route, navigation }) => {
                        //     const title = route.params.title;
                        //     return {
                        //         title: title,
                        //     }
                        // }}                        // options={( { route, navigation }) => {
                        //     const title = route.params.title;
                        //     return {
                        //         title: title,
                        //     }
                        // }}
                    />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
                </Stack.Navigator>
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
