import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemeView from '@/presentation/shared/ThemeView';
import React from 'react';
import { Alert } from 'react-native';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <ThemeView margin>
      <ThemedButton className='mb-5' onPress={createTwoButtonAlert} >2-Button Alert</ThemedButton>
      <ThemedButton className='my-5' onPress={createThreeButtonAlert} >3-Button Alert</ThemedButton>
    </ThemeView>

  );
};

export default App;