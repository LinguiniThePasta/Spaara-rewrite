import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useLocalSearchParams} from "expo-router";

export default function RecipeDetailScreen() {
    const { id } = useLocalSearchParams()
    const setActiveID = async (id: string) => {
        AsyncStorage.setItem('activeListID', id);
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Recipe Detail Screen {id}</Text>
        </View>
    );
}
