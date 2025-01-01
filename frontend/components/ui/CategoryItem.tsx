import {Text, TextInput, Pressable, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Ionicons";

export function CategoryItem({category, item}) {
    const toggleFavorite = (category_id, item_id) => {
    };

    const updateQuantity = (category_id, item_id, quantity) => {
    };

    const removeItem = (category_id, item_id) => {
    };

    return (
        <View
            key={item.id}
            style={tw`flex-row items-center justify-between px-4 py-3 border-b border-gray-300`}
        >
            {/* Item Details Section */}
            <View style={tw`flex-1 pr-4`}>
                <View style={tw`flex-row items-center gap-3`}>
                    <Pressable>
                        <View style={tw`w-5 h-5 border border-gray-400 rounded-full`}/>
                    </Pressable>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-lg text-gray-800`}>{item.name}</Text>
                        {item.optimized && (
                            <View style={tw`mt-1 flex-row gap-2`}>
                                <View style={tw`flex-row gap-1 items-center`}>
                                    <Icon name={'storefront-outline'} color={'gray'}></Icon>
                                    <Text style={tw`text-xs text-gray-500`}>{item.store}</Text>
                                </View>
                                <Text style={tw`text-xs text-gray-500`}>${item.price}</Text>
                                <Text style={tw`text-xs text-gray-500`}>1.2 mi</Text>
                            </View>
                            )}
                    </View>
                </View>
            </View>

            {/* Actions Section */}
            <View style={tw`flex-row items-center gap-1.5`}>
                {/* Favorite Button (only if optimized) */}
                {item.optimized && (
                    <Pressable onPress={() => toggleFavorite(category.id, item.id)}>
                        <Ionicons
                            name={item.favorited ? "star" : "star-outline"}
                            size={20}
                            color={item.favorited ? "#FFD700" : "#aaa"}
                        />
                    </Pressable>
                )}

                {/* Minus or Trash Button */}
                {item.quantity > 1 ? (
                    <Pressable
                        onPress={() => updateQuantity(category.id, item.id, item.quantity - 1)}
                    >
                        <Ionicons name="remove" size={20} color="#aaa"/>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => removeItem(category.id, item.id)}>
                        <Ionicons name="trash" size={20} color="#aaa"/>
                    </Pressable>
                )}

                {/* Quantity Input */}
                <TextInput
                    style={tw`w-10 h-8 text-center border border-gray-300 rounded-md`}
                    value={String(item.quantity)}
                    keyboardType="numeric"
                    onChangeText={(text) =>
                        updateQuantity(category.id, item.id, parseInt(text) || 0)
                    }
                />

                {/* Add Button */}
                <Pressable
                    onPress={() => updateQuantity(category.id, item.id, item.quantity + 1)}
                >
                    <Ionicons name="add" size={20} color="#000"/>
                </Pressable>
            </View>
        </View>
    );
}
