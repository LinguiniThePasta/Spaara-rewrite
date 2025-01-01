import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useLocalSearchParams} from "expo-router";

export default function RecipeDetailScreen() {
    const {id} = useLocalSearchParams()
    const setActiveID = async (id: string) => {
        AsyncStorage.setItem('activeListID', id);
    }
    return (
        <View className="flex-1 bg-background">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CategoryList
                categories={categories}
                toggleCategory={toggleCategory}
                toggleFavorite={toggleFavorite}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                isOptimized={isOptimized}
            />
            <View className="absolute bottom-0 left-0 right-0">
                <Button title="Optimize" onPress={optimizeList} disabled={isOptimized}/>
                <BottomNav/>
            </View>
        </View>
    );
}
