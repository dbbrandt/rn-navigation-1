import {View, Text, StyleSheet, ScrollView} from "react-native";
import {CATEGORIES} from "../data/dummy-data";

function HomePage({children}) {

    return (
        <ScrollView>
            <View style={styles.rootContainer}>
                {CATEGORIES.map((category) => (
                        <View style={[{backgroundColor: category.color}, styles.categoryContainer]}>
                            <View style={styles.categoryContent}>
                                <Text key={category.id}
                                      style={styles.categoryText}>
                                    {category.title}
                                </Text>
                            </View>
                        </View>
                    )
                )}
            </View>
        </ScrollView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    categoryContainer: {
        padding: 10,
        width: '40%',
        height: 200,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        justifyContent: 'center',
    },
    categoryText: {
        fontSize: 20,
        padding: 8,
        textAlign: 'center',
    }
})