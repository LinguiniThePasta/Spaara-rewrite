import React, {useState} from "react";
import {View, Text, TextInput, Pressable, ScrollView, Switch, SafeAreaView} from "react-native";
import tw from "twrnc";
import {Header} from "@/components/ui/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";

export default function ProfileScreen() {
    const [maxDistance, setMaxDistance] = useState(10);
    const [maxStores, setMaxStores] = useState(5);
    const [username, setUsername] = useState("JohnDoe");
    const [email, setEmail] = useState("john@example.com");
    const [password, setPassword] = useState("");
    const [dietaryRestrictions, setDietaryRestrictions] = useState({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        nutFree: false,
    });

    const handleSubmit = () => {
        console.log("Profile updated", {maxDistance, maxStores, username, email, password, dietaryRestrictions});
    };

    return (
        <ScrollView style={tw`flex-1 bg-gray-100`}>
            <SafeAreaView>
                <Header type={"circle"} title={"Profile"} onLeftPress={() => router.back()} back={true} rightIcon={false}/>
                <View style={tw`px-4 py-6`}>
                    <View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-sm font-medium text-gray-700`}>
                                Maximum Distance: {maxDistance} miles
                            </Text>
                            <TextInput
                                style={tw`border rounded-lg px-4 py-2 mt-2 bg-white`}
                                keyboardType="numeric"
                                value={String(maxDistance)}
                                onChangeText={(value) => setMaxDistance(parseInt(value) || 0)}
                            />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-sm font-medium text-gray-700`}>
                                Maximum Stores: {maxStores}
                            </Text>
                            <TextInput
                                style={tw`border rounded-lg px-4 py-2 mt-2 bg-white`}
                                keyboardType="numeric"
                                value={String(maxStores)}
                                onChangeText={(value) => setMaxStores(parseInt(value) || 0)}
                            />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-sm font-medium text-gray-700`}>Username</Text>
                            <TextInput
                                style={tw`border rounded-lg px-4 py-2 mt-2 bg-white`}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-sm font-medium text-gray-700`}>Email</Text>
                            <TextInput
                                style={tw`border rounded-lg px-4 py-2 mt-2 bg-white`}
                                value={email}
                                keyboardType="email-address"
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-sm font-medium text-gray-700`}>New Password</Text>
                            <TextInput
                                style={tw`border rounded-lg px-4 py-2 mt-2 bg-white`}
                                value={password}
                                secureTextEntry
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-lg font-medium text-gray-700 mb-2`}>
                                Dietary Restrictions
                            </Text>
                            {Object.entries(dietaryRestrictions).map(([key, value]) => (
                                <View key={key} style={tw`flex-row items-center mb-2`}>
                                    <Switch
                                        value={value}
                                        onValueChange={(newValue) =>
                                            setDietaryRestrictions({
                                                ...dietaryRestrictions,
                                                [key]: newValue,
                                            })
                                        }
                                        style={tw`mr-2`}
                                    />
                                    <Text style={tw`text-sm text-gray-900`}>
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <Pressable
                            onPress={handleSubmit}
                            style={tw`bg-indigo-600 py-3 px-4 rounded-lg`}
                        >
                            <Text style={tw`text-white text-center font-medium text-sm`}>
                                Update Profile
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
