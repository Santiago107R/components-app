import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import "@/global.css";
import { useThemeColor } from '@/hooks/use-theme-color';
import ThemeView from '@/presentation/shared/ThemeView';
import ThemeText from '@/presentation/ThemeText';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>

      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        <ThemeView margin >
          <ThemeText type='h1' className='mt-10'>Hola mundo</ThemeText>
        </ThemeView>

        {/* <Stack>

        </Stack> */}
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
