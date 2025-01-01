import React from "react";
import {View, Text, Pressable, FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {CategoryItem} from "@/components/ui/CategoryItem";
import tw from "twrnc";

export function CategoryList({
                                 categories,
                                 toggleCategory,
                                 isOptimized,
                             }) {
    return (
        <FlatList
            data={categories}
            keyExtractor={(category) => category.id.toString()}
            renderItem={({item: category}) => (
                <View style={tw`mt-4`}>
                    <Pressable
                        onPress={() => toggleCategory(category.id)}
                        style={tw`flex-row items-center gap-2`}
                    >
                        <Ionicons
                            name={category.isExpanded ? "chevron-down" : "chevron-forward"}
                            size={20}
                        />
                        <Text style={tw`font-medium`}>{category.name}</Text>
                    </Pressable>
                    {category.isExpanded &&
                        category.items.map((item) => (
                            <CategoryItem
                                key={item.id}
                                category={category}
                                item={item}
                                isOptimized={isOptimized}
                            />
                        ))}
                </View>
            )}
        />
    );
}
