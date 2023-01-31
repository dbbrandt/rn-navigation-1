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
            <StatusBar style="auto"/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
                        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
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
