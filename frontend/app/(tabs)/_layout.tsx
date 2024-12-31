import React from 'react';
import {Tabs} from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TabLayout() {
    const tabs = [
        {key: 'index', label: 'Home', icon: 'home-outline', color: '#FF69B4'},
        {key: 'map', label: 'Map', icon: 'location-outline', color: '#1E90FF'},
        {key: 'shopping', label: 'List', icon: 'cart-outline', color: '#32CD32'},
        {key: 'recipes', label: 'Recipes', icon: 'book-outline', color: '#FFA500'},
        {key: 'profile', label: 'Profile', icon: 'person-outline', color: '#FF6347'},
    ];

    return (
        <Tabs initialRouteName="shopping">
            {tabs.map((tab) => (
                <Tabs.Screen
                    name={tab.key}
                    key={tab.key}
                    options={{
                        title: tab.label,
                        tabBarIcon: ({color}) => (
                            <Icon name={tab.icon} size={24} color={color}/>
                        ),
                        tabBarActiveTintColor: tab.color,
                    }}
                />
            ))}
        </Tabs>
    );
}
