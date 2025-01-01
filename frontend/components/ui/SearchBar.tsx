import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';

export function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <View style={tw`flex-row items-center border-2 border-primary rounded-full px-4 py-2 mb-4`}>
            <Icon style={tw`text-muted-foreground`} name="search-outline" size={24}/>
            <TextInput
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search items"
                style={tw`ml-2 flex-1 bg-transparent`}
            />
        </View>
    );
}
