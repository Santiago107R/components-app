import useAnimation from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemeView from '@/presentation/shared/ThemeView';
import { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

const Animation101Screen = () => {

  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingFromTop, movingToTop} = useAnimation()
  // const animatedOpacity = useRef(new Animated.Value(0)).current
  // const animatedTop = useRef(new Animated.Value(-100)).current

  return (
    <ThemeView margin className='justify-center items-center flex-1'>

      <Animated.View
        className='bg-light-secondary dark:bg-light-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop,
          }]
        }}
      />

      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeIn({});
          startMovingFromTop({easing: Easing.elastic(1), duration: 700});
        }}
      >FadeIn</ThemedButton>
      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeOut({});
          movingToTop({duration: 700, callback: () => animatedTop.resetAnimation()});
        }}
      >FadeOut</ThemedButton>
    </ThemeView>
  );
};
export default Animation101Screen;
