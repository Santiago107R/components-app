import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Text, View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
    className?: string;
    margin?: boolean;
    safe?: boolean;
    bgColor?: string;
}

const ThemeView = ({ style, className, margin = false, safe = false, bgColor, children }: Props) => {

    const backgroundColor = bgColor ?? useThemeColor({}, 'background')
    const safeArea = useSafeAreaInsets();

    return (
        // className='bg-light-background dark:bg-dark-background'
        <View
            style={[
                {
                    backgroundColor: backgroundColor,
                    flex: 1,
                    paddingTop: safe ? safeArea.top : 0,
                    marginHorizontal: margin ? 10 : 0
                },
                style
            ]}
            className={className}
        >
            {children}
        </View>
    )
}

export default ThemeView