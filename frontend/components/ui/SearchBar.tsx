import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <View className="flex-row items-center border-2 border-primary rounded-full px-4 py-2">
      <Icon className="w-5 h-5 text-muted-foreground" name={"search-outline"} size={24} />
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search items"
        className="ml-2 flex-1 bg-transparent focus:outline-none"
      />
    </View>
  );
}