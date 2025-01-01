import React, {useEffect, useState} from 'react';
import {View, Text, Button, Pressable, SafeAreaView} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router, useLocalSearchParams} from "expo-router";
import {SearchBar} from '@/components/ui/SearchBar';
import {CategoryList} from '@/components/ui/CategoryList';
import tw from "twrnc";
import {Header} from "@/components/ui/Header";

export default function ShoppingDetailScreen() {
    const {id} = useLocalSearchParams()

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Beefed Bananas',
            isExpanded: true,
            items: [
                {
                    id: 1,
                    name: 'Fresh Bananas - Each',
                    quantity: 3,
                    price: 0.89,
                    unit_price: 0.89,
                    unit: "cnt",
                    store: 'Walmart',
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false,
                    optimized: true,
                },
                {
                    id: 2,
                    name: 'Eggs - Large - 12 ct',
                    quantity: 3,
                    price: null,
                    unit_price: null,
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false,
                    optimized: false,
                },
                {
                    id: 3,
                    name: 'Beef Choice Cubed',
                    quantity: 1,
                    price: null,
                    unit_price: null,
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false,
                    optimized: false,
                },
            ],
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOptimized, setIsOptimized] = useState(false);

    useEffect(() => {
        AsyncStorage.setItem('activeListID', id);
    }, [id]);

    const goBack = async () => {
        await AsyncStorage.removeItem('activeListID');
        router.push('/shopping');
    }
    return (
        <SafeAreaView style={tw`flex flex-1 bg-background`}>
            <Header type={"circle"} title={"Shopping Name (TBD)"} onLeftPress={() => goBack()} onRightPress={null}
                    back={true} rightIcon={true}/>
            <View style={tw`flex flex-1 p-4`}>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <View style={tw`flex flex-1 justify-between`}>
                    <CategoryList
                        categories={categories}
                        toggleCategory={null}
                        isOptimized={isOptimized}
                    />
                    <View style={tw`w-30 h-12`}>
                        <Pressable onPress={null} disabled={isOptimized} style={tw`flex-1 rounded-3xl bg-blue-500 p-4 justify-center`}>
                            <Text style={tw`flex-1 text-center`}>Optimize</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
