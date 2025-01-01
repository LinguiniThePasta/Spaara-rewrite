import React from "react";
import {View, Text, Pressable, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";

export function Header({type, title, onLeftPress, onRightPress, back, rightIcon}) {
    return (
        <View
            style={tw`flex-row items-center justify-between px-4 py-3 bg-gray-100`}
        >
            {/* Left Side */}
            {back ? (
                <Pressable onPress={onLeftPress} style={tw``}>
                    <Ionicons name="chevron-back" size={24} color="black"/>
                </Pressable>
            ) : (
                <View style={tw`w-10`}/>
            )}

            {/* Center Title */}
            {title && <Text style={tw`text-lg font-medium text-black`}>{title}</Text>}

            {/* Right Side */}
            {type === "circle" && rightIcon? (
                <View style={tw`w-8 h-8 bg-gray-400 rounded-full`}/>
            ) : type === "icon" ? (
                <Pressable onPress={onRightPress} style={tw`p-2`}>
                    <Image source={rightIcon} style={tw`w-8 h-8`} resizeMode="contain"/>
                </Pressable>
            ) : (
                <View style={tw`w-6`}/>
            )}
        </View>
    );
}
