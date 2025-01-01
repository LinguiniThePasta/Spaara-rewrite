import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export default function MapScreen() {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg`}>Map Screen</Text>
        </View>
    );
}
