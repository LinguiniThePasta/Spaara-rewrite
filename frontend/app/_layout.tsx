import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {useColorScheme} from "@/hooks/useColorScheme";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        LeagueSpartanRegular: require('../assets/fonts/LeagueSpartan-Regular.ttf'),
        LeagueSpartanBold: require('../assets/fonts/LeagueSpartan-Bold.ttf'),
        LeagueSpartanLight: require('../assets/fonts/LeagueSpartan-Light.ttf'),
        LatoRegular: require('../assets/fonts/Lato-Regular.ttf'),
        LatoBold: require('../assets/fonts/Lato-Bold.ttf'),
        LatoLight: require('../assets/fonts/Lato-Light.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DarkTheme}>
            <Stack>
                <Stack.Screen name="login" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name="+not-found"/>
            </Stack>
        </ThemeProvider>
    );
}
