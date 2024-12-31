import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Link href="/shopping">Go to Shopping</Link>
    </View>
  );
}