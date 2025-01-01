import {Text, View} from 'react-native';
import {Link} from 'expo-router';
import tw from 'twrnc';

export default function IndexScreen() {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Text style={tw`text-lg`}>Home Screen</Text>
            <Link href="/shopping" style={tw`text-blue-500 underline mt-2`}>
                Go to Shopping
            </Link>
        </View>
    );
}
