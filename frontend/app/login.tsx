import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import tw from "twrnc";
import { Header } from "@/components/ui/Header";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Handle login logic here
    };

    const handleSignUp = () => {
        // Navigate to sign up screen
    };

    const handleForgotPassword = () => {
        // Navigate to forgot password screen
    };

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Header */}
            <Header
                type="icon"
                title="Welcome back"
                back={true}
                onLeftPress={() => navigation.goBack()}
            />

            {/* Login Form */}
            <View style={tw`flex-1 justify-center px-6`}>
                <TextInput
                    style={tw`border-b-2 border-gray-400 py-2 mb-6`}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={tw`border-b-2 border-gray-400 py-2 mb-6`}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable onPress={handleForgotPassword}>
                    <Text style={tw`text-sm text-orange-500 text-right`}>Forgot Password?</Text>
                </Pressable>

                <Pressable onPress={handleLogin} style={tw`bg-orange-500 py-3 rounded-lg mt-6`}>
                    <Text style={tw`text-center text-white text-lg font-semibold`}>Login</Text>
                </Pressable>

                <Pressable onPress={handleSignUp} style={tw`mt-6`}>
                    <Text style={tw`text-sm text-center text-gray-500`}>
                        Don't have an account?{" "}
                        <Text style={tw`text-orange-500`}>Sign Up.</Text>
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
