import { BackgroundColorProps, BorderProps, SpacingProps } from '@shopify/restyle';
import { TouchableOpacityProps } from 'react-native';
import { Theme } from 'shared/theme';

export interface StyledButtonProps extends TouchableOpacityProps {
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    theme?: keyof Theme['colors'];
    variant?: 'solid' | 'outline' | 'ghost';
    leftComponent?: () => JSX.Element;
    rightComponent?: () => JSX.Element;
    onPress?: () => void;
    color?: keyof Theme['colors'];
    width?: string | number
}

export type RestyleProps = SpacingProps<Theme> &
    BorderProps<Theme> &
    BackgroundColorProps<Theme>;

export type BaseButtonProps = RestyleProps & StyledButtonProps;
