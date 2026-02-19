import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    className?: string;

}

const ThemedTextInput = ({ className, ...rest }: Props) => {
    return (
        <TextInput
            className={`py-4 px-2 text-light-text dark:text-dark-text ${className}`}
            placeholderTextColor={'grey'}
            {...rest}
        />
    )
}

export default ThemedTextInput