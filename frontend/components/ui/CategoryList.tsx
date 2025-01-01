import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function CategoryList({categories, toggleCategory, toggleFavorite, updateQuantity, removeItem, isOptimized}) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(category) => category.id.toString()}
            renderItem={({item: category}) => (
                <View className="mt-4">
                    <TouchableOpacity onPress={() => toggleCategory(category.id)}
                                      className="flex-row items-center gap-2">
                        <Ionicons name={category.isExpanded ? 'chevron-down' : 'chevron-forward'} size={20}/>
                        <Text className="font-medium">{category.name}</Text>
                    </TouchableOpacity>
                    {category.isExpanded &&
                        category.items.map(item => (
                            <View key={item.id} className="flex-row items-center gap-3">
                                <Text>{item.name}</Text>
                                <TouchableOpacity onPress={() => toggleFavorite(category.id, item.id)}>
                                    <Ionicons name={item.favorited ? 'star' : 'star-outline'} size={20}
                                              color={item.favorited ? '#FFD700' : '#aaa'}/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => updateQuantity(category.id, item.id, item.quantity + 1)}>
                                    <Ionicons name="add" size={20}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => removeItem(category.id, item.id)}>
                                    <Ionicons name="trash" size={20} color="#aaa"/>
                                </TouchableOpacity>
                            </View>
                        ))}
                </View>
            )}
        />
    );
}
