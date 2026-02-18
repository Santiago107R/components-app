import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemeView from '@/presentation/shared/ThemeView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import ThemedTextInput from '../../presentation/shared/ThemedTextInput';
import ThemeText from '../../presentation/shared/ThemeText';

const TextInputsScreen = () => {

  const isIOS = Platform.OS === 'ios'

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })


  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemeView margin>
          <ThemeCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo Electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />

          </ThemeCard>

          <ThemeCard className='p-3 my-2'>
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className='p-3 my-2'>
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className='p-3 my-2'>
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard className='p-3 my-2'>
            <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
          </ThemeCard>

          <ThemeCard 
            // className={isIOS ? 'mb-28' : 'mb-10'}
          >
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemeCard>

        </ThemeView>
        {isIOS && <View className='mb-28' />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
