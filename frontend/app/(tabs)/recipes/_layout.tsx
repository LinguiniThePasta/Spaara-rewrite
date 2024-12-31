import React, {useEffect} from 'react';
import {Navigator, router, Stack} from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slot = Navigator.Slot;

export default function RecipeLayout() {
    useEffect(() => {
        const redirectToActiveID = async () => {
            const activeId = await AsyncStorage.getItem('activeRecipeID');
            if (activeId) {
                router.replace(`/recipes/${activeId}`);
            }
        };
        redirectToActiveID();
    }, []);


    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Slot/>
        </Stack>
    );
}
