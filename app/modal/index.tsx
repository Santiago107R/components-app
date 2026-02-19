import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemeText from '@/presentation/shared/ThemeText';
import ThemeView from '@/presentation/shared/ThemeView';
import { Link, router } from 'expo-router';

const ModalScreen = () => {
  return (
    <ThemeView>
      <Link asChild href={'/modal/modal-window'} className='mx-4'>
        <ThemeText type='h2' className='m-2'>Abrir Modal</ThemeText>
      </Link>

      <ThemedButton className='mx-4' onPress={() => router.push('/modal/modal-window')}>Abrir Modal</ThemedButton>

    </ThemeView>
  );
};
export default ModalScreen;
