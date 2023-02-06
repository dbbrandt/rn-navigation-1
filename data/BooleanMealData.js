function BooleanMealData(mealData) {
    const duration = `${mealData.duration}m`;
    const overviewItems = [mealData.affordability, mealData.complexity, duration];
    const dietaryItems = [];
    if (mealData.isGlutenFree) dietaryItems.push('Gluten Free');
    if (mealData.isVegan) dietaryItems.push('Vegan');
    if (mealData.isVegetarian) dietaryItems.push('Vegetarian');
    if (mealData.isLactoseFree) dietaryItems.push('Lactose Free');
    return {overviewItems: overviewItems, dietaryItems: dietaryItems}
}

export default BooleanMealData;