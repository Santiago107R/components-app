import useAnimation from '@/hooks/useAnimation';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';

interface Props {
    uri: string;
    className?: string;
    // style: StyleProps<ImageStyle>
}

const FadeInImage = ({ uri, className }: Props) => {

    const [isLoading, setIsLoading] = useState(true)
    const { animatedOpacity, fadeIn } = useAnimation()

    return (
        <View className={`justify-center items-center`}>
            {
                isLoading && (
                    <ActivityIndicator
                        className='absolute'
                        color={'grey'}
                        size={30}
                    />
                )
            }

            <Animated.Image
                source={{ uri }}
                className={`${className}`}
                style={{ opacity: animatedOpacity }}
                onLoadEnd={() => {
                    fadeIn({})
                    setIsLoading(false)
                }}

            />
        </View>
    )
}

export default FadeInImage