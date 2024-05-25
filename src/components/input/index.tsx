/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Platform,
    TextInput,
    View,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import Box from '../Box';
import Text from '../Text';
import Pressable from '../Pressable';
import { InputProps } from './input.interface';
import { useTheme } from '@shopify/restyle';
import { AntDesign, Feather } from '@expo/vector-icons';
import InputWrapper from 'components/InputWrapper';

const Input: React.FC<InputProps> = ({
    label,
    leftComponent,
    rightComponent,
    autoCapitalize,
    placeholder,
    onChangeText,
    isLoading,
    isPassword = false,
    showErrorIcon,
    errorMessage,
    hintMessage,
    value,
    ...rest
}) => {
    const currentMode = useColorScheme();

    const [secureEntry, setSecureEntry] = useState<boolean>(isPassword);

    const toggleVisibility = () => setSecureEntry(!secureEntry);

    if (Platform.OS === 'ios') {
        KeyboardManager.setEnable(true);
        KeyboardManager.setEnableDebugging(true);
        // KeyboardManager.setKeyboardDistanceFromTextField(RFValue(30));
        KeyboardManager.setLayoutIfNeededOnUpdate(true);
        KeyboardManager.setEnableAutoToolbar(true);
        KeyboardManager.setToolbarDoneBarButtonItemText('Done');
        KeyboardManager.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
        KeyboardManager.setToolbarPreviousNextButtonEnable(true);
        KeyboardManager.setShouldShowToolbarPlaceholder(true);
        KeyboardManager.setOverrideKeyboardAppearance(false);
        KeyboardManager.setKeyboardAppearance(!currentMode ? 'default' : currentMode); // "default" | "light" | "dark"
        KeyboardManager.setShouldResignOnTouchOutside(true);
        KeyboardManager.setShouldPlayInputClicks(true);
    }

    const { colors } = useTheme();

    return (
        <InputWrapper
            containerStyle={rest.style}
            errorMessage={errorMessage}
            hintMessage={hintMessage}
            isLoading={isLoading}
            label={label}
            leftComponent={leftComponent}
            rightComponent={rightComponent}
            showErrorIcon={showErrorIcon}
            renderHint={rest.renderHint}
        >

            <TextInput
                value={value}
                style={styles.input}
                autoCapitalize={autoCapitalize}
                autoCorrect={false}
                keyboardAppearance={!currentMode ? 'default' : currentMode}
                placeholder={placeholder}
                placeholderTextColor="grey"
                secureTextEntry={secureEntry}
                onChangeText={onChangeText}
                {...rest}
            />
            {isPassword &&
                (secureEntry ? (
                    <Pressable onPress={toggleVisibility} style={styles.pressable}>
                        <AntDesign name='eyeo' color={colors.error} />
                    </Pressable>
                ) : (
                    <Pressable onPress={toggleVisibility} style={styles.pressable}>
                        <Feather name='eye-off' color={colors.error} />
                    </Pressable>
                ))}

        </InputWrapper>
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
    },
    pressable: {
        marginLeft: 8,
    },
});

export default Input;
