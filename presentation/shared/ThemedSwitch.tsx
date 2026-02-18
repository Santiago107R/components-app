import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Platform, Pressable, Switch, View } from 'react-native';
import ThemeText from './ThemeText';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary')

    return (
        <Pressable
            className={`flex flex-row mx-5 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {
                text ? <ThemeText type='h2'>{text}</ThemeText> : <View />
            }
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? 'white' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: switchActiveColor }}
            // ios_backgroundColor={value ? 'green' : '#767577'}
            />
        </Pressable>
    )
}

export default ThemedSwitch