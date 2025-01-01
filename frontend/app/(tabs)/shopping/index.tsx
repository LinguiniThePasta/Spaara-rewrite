import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, SafeAreaView, Pressable, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {router} from "expo-router";
import tw from 'twrnc';
import {Header} from "@/components/ui/Header";
import {SearchBar} from "@/components/ui/SearchBar";
import {useRouter} from "expo-router";

export default function ShoppingListsScreen() {
    const navigation = useNavigation();
    const [lists, setLists] = useState([
        {id: 1, name: 'Grocery Shopping', itemCount: 5},
        {id: 2, name: 'Party Supplies', itemCount: 8},
        {id: 3, name: 'Weekly Essentials', itemCount: 12},
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const router = useRouter();

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
        // Router Push this so it goes to the new list automatically
    };
    const confirmDelete = () => {
        setModalVisible(false);
        // Add your delete logic here
        console.log(`Deleted item with ID: ${selectedItem.id}`);
        // Example: Remove the item from the list
        // const updatedData = data.filter(item => item.id !== selectedItem.id);
        // setData(updatedData);
    };

    const renderItem = ({item}) => (
        <Pressable
            onPress={() => router.push(`/shopping/${item.id}`)}
            style={tw`bg-white p-4 rounded-lg shadow mb-2`}
        >
            <View style={tw`flex-row justify-between items-center`}>
                <View>
                    <Text style={tw`font-semibold text-lg`}>{item.name}</Text>
                    <Text style={tw`text-sm text-gray-600`}>{item.itemCount} items</Text>
                </View>
                <Pressable
                    onPress={() => {
                        setSelectedItem(item);
                        setModalVisible(true);
                    }}
                >
                    <Ionicons name="trash-outline" size={20} color="#aaa"/>
                </Pressable>
            </View>
        </Pressable>
    );
    return (
        <SafeAreaView style={tw`flex-1 bg-gray-100`}>
            <Header type={"circle"} title={"Shopping Lists"} onLeftPress={null} onRightPress={null} back={false} rightIcon={true}/>
            <View style={tw`flex-1 p-4`}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <FlatList
                    data={lists}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={tw`pb-20`}
                />
                {/* Modal */}
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}>
                        <View style={tw`bg-white p-6 rounded-lg w-4/5`}>
                            <Text style={tw`text-lg font-semibold mb-4`}>
                                Are you sure you want to delete "{selectedItem?.name}"?
                            </Text>
                            <View style={tw`flex-row justify-between`}>
                                <Pressable
                                    onPress={() => setModalVisible(false)}
                                    style={tw`px-4 py-2 bg-gray-300 rounded-md`}
                                >
                                    <Text style={tw`text-gray-700`}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    onPress={confirmDelete}
                                    style={tw`px-4 py-2 bg-red-500 rounded-md`}
                                >
                                    <Text style={tw`text-white`}>Delete</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        </SafeAreaView>
    );
}
