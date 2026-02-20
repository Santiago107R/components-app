import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';
import { allRoutes } from '@/constants/Routes';
import "@/global.css";
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>

      <ThemeChangerProvider>
      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            },
            animation: 'flip',
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: 'ComponentsApp',
            }} />

          {
            allRoutes.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  title: route.title,
                  headerShown: route.title !== "Slides"
                }} />)
            )
          }

        </Stack>
        <StatusBar style="auto" />
        {/* </ThemeProvider> */}
      </ThemeChangerProvider>
    </GestureHandlerRootView >
  );
}
