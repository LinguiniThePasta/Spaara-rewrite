import React from 'react'
import type {StackProps, TabLayout, TabsTabProps} from 'tamagui'
import {
    AnimatePresence,
    Button,
    H5,
    SizableText,
    Tabs,
    XStack,
    YStack,
    styled,
} from 'tamagui'
import Icon from 'react-native-vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs defaultValue="grocery" width={400}>
            <Tabs.List space>
                <Tabs.Tab value="favorites">
                    <SizableText>Favorites</SizableText>
                </Tabs.Tab>
                <Tabs.Tab value="map">
                    <SizableText>Map</SizableText>
                </Tabs.Tab>
                <Tabs.Tab value="grocery">
                    <SizableText>Grocery</SizableText>
                </Tabs.Tab>
                <Tabs.Tab value="recipe">
                    <SizableText>Recipe</SizableText>
                </Tabs.Tab>
                <Tabs.Tab value="social">
                    <SizableText>Social</SizableText>
                </Tabs.Tab>
            </Tabs.List>
            <Tabs.Content value="favorites">
                <Icon name="heart-outline" size={24}/>
            </Tabs.Content>
            <Tabs.Content value="map">
                <Icon name="location-outline" size={24}/>
            </Tabs.Content>
            <Tabs.Content value="grocery">
                <Icon name="cart-outline" size={24}/>
            </Tabs.Content>
            <Tabs.Content value="recipe">
                <Icon name="book-outline" size={24}/>
            </Tabs.Content>
            <Tabs.Content value="social">
                <Icon name="people-outline" size={24}/>
            </Tabs.Content>
        </Tabs>

    );
}
