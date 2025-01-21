import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <View style={tw`relative flex-row items-center`}>
            <Icon style={tw`w-5 h-5 text-gray-400 absolute left-3`} name="search-outline" size={24}/>
            <TextInput
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search items"
                style={tw`flex flex-1 pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary`}
            />
        </View>

    );
}
