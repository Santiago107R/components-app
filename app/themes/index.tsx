import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemeView from '@/presentation/shared/ThemeView';
// import { useColorScheme } from "nativewind";
import { useState } from 'react';
import ThemedSwitch from '../../presentation/shared/ThemedSwitch';
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';
// import { useColorScheme } from 'react-native';

const ThemesScreen = () => {
  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } = useThemeChangerContext()
  // const { colorScheme, setColorScheme } = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  })

  const setDarkMode = (value: boolean) => {

    toggleTheme()

    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }

  const setSystemMode = (value: boolean) => {

    if (value) {
      setSystemTheme();
    }

      setDarkModeSettings({
        darkMode: darkModeSettings.darkMode,
        systemMode: value
      })
      
  }

  return (
    <ThemeView margin>
      <ThemeCard className='mt-5'>

        <ThemedSwitch
          text='Dark Mode'
          className='my-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          text='System Mode'
          className='mb-5'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />

      </ThemeCard>
    </ThemeView>
  );
};
export default ThemesScreen;
