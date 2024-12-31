import React, {useEffect} from 'react';
import {Navigator, router, Stack} from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slot = Navigator.Slot;

export default function ShoppingLayout() {
    useEffect(() => {
        const redirectToActiveID = async () => {
            const activeId = await AsyncStorage.getItem('activeListID');
            if (activeId) {
                router.replace(`/shopping/${activeId}`);
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
