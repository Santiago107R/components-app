import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemeText from '@/presentation/shared/ThemeText';
import ThemeView from '@/presentation/shared/ThemeView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';

const ModalScreen = () => {
    return (
        <ThemeView className='justify-center items-center flex-1' bgColor='#A52182'>
            <ThemeText>Hola, soy un modal</ThemeText>

            <ThemedButton className='my-4' onPress={() => router.push('/modal/modal-window2')} >Otro Modal</ThemedButton>

            <ThemedButton 
                onPress={() => router.dismiss()}
            >Cerrar</ThemedButton>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ThemeView>
    )
}

export default ModalScreen