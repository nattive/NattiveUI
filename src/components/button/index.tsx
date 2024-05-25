import React from 'react';
import {
    backgroundColor,
    border,
    composeRestyleFunctions,
    createBox,
    spacing,
    useRestyle,
    useTheme,
} from '@shopify/restyle';
import { ActivityIndicator } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Pressable, { type PressableProps as NPressableProps } from '../Pressable';
import Text from '../Text';
import Box from '../Box';
import { Theme } from 'shared/theme';
import { BaseButtonProps, RestyleProps } from './button.interface';
import { heightPixel } from 'helpers/layout';

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    border,
    backgroundColor,
]);

const defaultContainerProps: NPressableProps = {
    alignItems: 'center',
    flexDirection: 'column',
    height: heightPixel(48),
    justifyContent: 'center',
    // width: width * 0.9,
};

const getPressable = () =>
    createBox<
        Theme,
        React.ComponentProps<typeof Pressable> & { children?: React.ReactNode }
    >(Pressable);

export type PressableProps = React.ComponentProps<
    ReturnType<typeof getPressable>
>;

const Button = ({
    text = 'Continue',
    disabled,
    theme = 'primary500',
    variant = 'solid',
    loading,
    leftComponent,
    rightComponent,
    color,
    width,
    ...rest
}: BaseButtonProps & PressableProps) => {

    const apptheme = useTheme()
    //   const scale = useSharedValue(1);
    //   const { colors } = useTheme();
    const props = useRestyle(restyleFunctions, rest);
    //   const animatedStyle = useAnimatedStyle(() => {
    //     return {
    //       transform: [{ scale: scale.value }],
    //     };
    //   });

    //   const startAnimation = () => {
    //     scale.value = withSpring(0.95);
    //   };

    //   const reverseAnimation = () => {
    //     scale.value = withSpring(1);
    //   };

    const getBackgroundColor: () => keyof Theme['colors'] = () => {
        if (variant === 'solid') {
            if (loading) return 'grey200';
            return theme;
        }
        return 'transparent';
    };

    const getColors: () => keyof Theme['colors'] = () => {
        if (color) {
            return color;
        }
        if (variant === 'solid') {
            if (
                !!loading ||
                theme === 'primary500' ||
                theme === 'black' ||
                theme === 'primary600' ||
                theme === 'primary700' ||
                theme === 'primary800' ||
                theme === 'primary900'
            ) {
                return 'white';
            }
            if (theme === 'primary100' || theme === 'primary200') {
                return 'text';
            }
            if (theme === 'error') {
                return 'white';
            }
            return 'text';
        }
        if (variant === 'outline') {
            return theme;
        }
        return 'text';
    };

    return (
        // <Animated.View style={animatedStyle}>
        <Pressable
            ref={rest.ref}
            width={width}
            borderRadius="sm"
            disabled={disabled}
            borderColor={getColors()}
            borderWidth={variant === 'outline' ? 1 : 0}
            backgroundColor={getBackgroundColor()}
            // onPressIn={startAnimation}
            // onPressOut={reverseAnimation}
            {...props}
            {...defaultContainerProps}
            {...rest}
        >
            <Box flexDirection="row" alignItems="center">
                {!!leftComponent && leftComponent()}
                <Text mx="m" color={getColors()} fontSize={14} variant="body">
                    {text}
                </Text>
                {loading && <ActivityIndicator color={apptheme.colors.white} />}
                {!!rightComponent && rightComponent()}
            </Box>
        </Pressable>
        // </Animated.View>
    );
};

Button.defaultProp = {
    variant: 'solid',
    theme: 'primary',
};

export default Button;
