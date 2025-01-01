import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {router} from "expo-router";

export default function ShoppingListsScreen() {
    const navigation = useNavigation();
    const [lists, setLists] = useState([
        {id: 1, name: 'Grocery Shopping', itemCount: 5},
        {id: 2, name: 'Party Supplies', itemCount: 8},
        {id: 3, name: 'Weekly Essentials', itemCount: 12},
    ]);
    const [newListName, setNewListName] = useState('');

    useEffect(() => {
        const checkActiveList = async () => {
            const activeListId = await AsyncStorage.getItem('activeListId');
            if (activeListId) {
                router.replace(`/shopping/${activeListId}`);
            }
        };
        checkActiveList();
    }, [navigation]);

    const addList = async () => {
        if (newListName.trim() !== '') {
            const newList = {id: Date.now(), name: newListName, itemCount: 0};
            setLists([...lists, newList]);
            setNewListName('');
            await AsyncStorage.setItem('activeListId', newList.id.toString());
            router.push(`/shopping/${newList.id}`);
        }
    };

    const renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => router.push(`/shopping/${item.id}`)}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md mb-2"
        >
            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="font-semibold text-lg">{item.name}</Text>
                    <Text className="text-sm text-gray-600">{item.itemCount} items</Text>
                </View>
                <Ionicons name="cart-outline" size={20} color="#aaa"/>
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-gray-100">
            <View className="bg-blue-500 p-4">
                <Text className="text-white text-2xl font-bold">Shopping Lists</Text>
            </View>

            <View className="flex-1 container mx-auto p-4">
                <View className="flex-row items-center mb-4">
                    <TextInput
                        value={newListName}
                        onChangeText={setNewListName}
                        placeholder="New list name"
                        className="flex-1 p-2 border rounded-l-lg bg-white"
                    />
                    <TouchableOpacity
                        onPress={addList}
                        className="bg-blue-500 p-2 rounded-r-lg justify-center items-center"
                    >
                        <Ionicons name="add" size={24} color="white"/>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={lists}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingBottom: 20}}
                />
            </View>
        </View>
    );
}
