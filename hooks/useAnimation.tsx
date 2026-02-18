import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'

const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current
    const animatedTop = useRef(new Animated.Value(0)).current

    const fadeIn = ({duration = 300, toValue = 1, useNativeDriver = true, easing = Easing.linear, callback = () => {},}) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
        }).start(callback);
    }

    const fadeOut = ({duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.ease, callback = () => {},}) => {
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing,
        }).start(callback);
    }

    const startMovingFromTop = ({initialPosition = -100 , duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.ease, callback = () => {},}) => {
        
        animatedTop.setValue(initialPosition)

        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            // easing: Easing.elastic(1),
            easing: easing,
        }).start(callback)
    }

    const movingToTop = ({duration = 300, toValue = -100, useNativeDriver = true, easing = Easing.ease, callback = () => {},}) => {
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: useNativeDriver,
            easing: easing
            // }).start(() => animatedTop.setValue(-100))
        }).start(callback)
    }

    return {
        animatedOpacity,
        animatedTop,

        fadeIn,
        fadeOut,
        startMovingFromTop,
        movingToTop,
    }
}

export default useAnimation