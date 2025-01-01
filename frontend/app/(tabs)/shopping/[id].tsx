import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useLocalSearchParams} from "expo-router";
import { SearchBar } from '@/components/ui/SearchBar';
import { CategoryList } from '@/components/ui/CategoryList';

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
                    quantity: 1,
                    price: null,
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false
                },
                {
                    id: 2,
                    name: 'Eggs - Large - 12 ct',
                    quantity: 3,
                    price: null,
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false
                },
                {
                    id: 3,
                    name: 'Beef Choice Cubed',
                    quantity: 1,
                    price: null,
                    favorited: false,
                    category: 'Beefed Bananas',
                    added_after_optimization: false
                },
            ],
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOptimized, setIsOptimized] = useState(false);

    useEffect(() => {
        AsyncStorage.setItem('activeListID', id);
    }, [id]);

    return (
        <View className="flex-1 bg-background">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <CategoryList
                categories={categories}
                toggleCategory={null}
                toggleFavorite={null}
                updateQuantity={null}
                removeItem={null}
                isOptimized={isOptimized}
            />
            <View className="absolute bottom-0 left-0 right-0">
                <Button title="Optimize" onPress={null} disabled={isOptimized}/>
            </View>
        </View>
    );
}
