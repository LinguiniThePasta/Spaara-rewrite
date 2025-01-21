import {Link} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {View, Text, Pressable, TouchableOpacity} from "react-native";
import tw from "twrnc";
import axios from "axios";
import Config from "react-native-config";
import {v4 as uuid} from 'uuid';
import 'react-native-get-random-values';

import {sha256} from 'js-sha256';


export default function IndexScreen() {

    const sha256ToBase64 = (string) => {
        console.log("asdfsf12")
        const hash = sha256(string);
        const hashArray = new Uint8Array(hash.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
        const base64 = btoa(String.fromCharCode(...hashArray));
        return base64;
    }


    const getAuth = async () => {
        console.log("asdfsf")
        const state = uuid();
        const verifier = uuid().replace(/-/g, '');
        const challenge = sha256ToBase64(verifier);

        try {
            const response = await axios.get(`${Config.SOCIAL_AUTH_AUTH0_DOMAIN}/authorize`,
                {
                    params: {
                        audience: `${Config.SOCIAL_AUTH_AUTH0_IDENTIFIER}`,
                        scope: 'profile email',
                        response_type: 'code',
                        client_id: `${Config.SOCIAL_AUTH_AUTH0_KEY}`,
                        state: state,
                        redirect_uri: `${Config.BASE_URL}/callback?`,
                        code_challenge: challenge,
                        code_challenge_method: 'S256',
                    }
                }
            )
            console.log(Config.SOCIAL_AUTH_AUTH0_IDENTIFIER);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={tw`flex-1 bg-background flex flex-col`}>
            <View style={tw`flex-grow items-center justify-center px-4`}>
                <View style={tw`w-full max-w-md text-center`}>
                    <Ionicons
                        name="cart-outline"
                        style={tw`text-primary mx-auto mb-8`}
                        size={96}
                    />

                    <Text style={tw`text-4xl font-bold mb-4`}>Welcome to ShopSmart</Text>
                    <Text style={tw`text-xl text-muted-foreground mb-8`}>
                        Your personal shopping assistant
                    </Text>
                    <View style={tw`space-y-4`}>
                        <TouchableOpacity
                            style={tw`w-full bg-blue-600 py-3 rounded-full font-medium`}
                            onPress={async () => await getAuth()}
                        >
                            <Text style={tw`text-center text-primary-foreground`}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                        <Text style={tw`text-sm text-muted-foreground`}>
                            By continuing, you agree to our{" "}
                            <Link href="/terms" asChild>
                                <Text style={tw`text-primary underline`}>Terms of Service</Text>
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" asChild>
                                <Text style={tw`text-primary underline`}>Privacy Policy</Text>
                            </Link>
                        </Text>
                    </View>
                </View>
            </View>
            <View style={tw`py-4 text-center`}>
                <Text style={tw`text-sm text-muted-foreground`}>
                    © 2023 ShopSmart. All rights reserved.
                </Text>
            </View>
        </View>
    );
}
