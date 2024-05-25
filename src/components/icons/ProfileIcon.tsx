import React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'shared/theme';

export default function ProfileIcon({
    color = theme.colors.text,
    size = 20,
}: {
    color?: string;
    size?: number;
}) {
    const xml = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.133 9.68341C10.108 9.68341 10.0913 9.68341 10.0663 9.68341C10.0247 9.67508 9.96635 9.67508 9.91635 9.68341C7.49968 9.60841 5.67468 7.70841 5.67468 5.36675C5.67468 2.98341 7.61635 1.04175 9.99968 1.04175C12.383 1.04175 14.3247 2.98341 14.3247 5.36675C14.3163 7.70841 12.483 9.60841 10.158 9.68341C10.1497 9.68341 10.1413 9.68341 10.133 9.68341ZM9.99968 2.29175C8.30802 2.29175 6.92468 3.67508 6.92468 5.36675C6.92468 7.03341 8.22468 8.37508 9.88302 8.43341C9.92468 8.42508 10.0413 8.42508 10.1497 8.43341C11.783 8.35841 13.0663 7.01675 13.0747 5.36675C13.0747 3.67508 11.6913 2.29175 9.99968 2.29175Z" fill="${color}"/>
    <path d="M10.1413 18.7916C8.50801 18.7916 6.86634 18.3749 5.62467 17.5416C4.46634 16.7749 3.83301 15.7249 3.83301 14.5833C3.83301 13.4416 4.46634 12.3833 5.62467 11.6083C8.12467 9.94992 12.1747 9.94992 14.658 11.6083C15.808 12.3749 16.4497 13.4249 16.4497 14.5666C16.4497 15.7083 15.8163 16.7666 14.658 17.5416C13.408 18.3749 11.7747 18.7916 10.1413 18.7916ZM6.31634 12.6583C5.51634 13.1916 5.08301 13.8749 5.08301 14.5916C5.08301 15.2999 5.52467 15.9833 6.31634 16.5083C8.39134 17.8999 11.8913 17.8999 13.9663 16.5083C14.7663 15.9749 15.1997 15.2916 15.1997 14.5749C15.1997 13.8666 14.758 13.1833 13.9663 12.6583C11.8913 11.2749 8.39134 11.2749 6.31634 12.6583Z" fill="${color}"/>
    </svg>

`;
    // eslint-disable-next-line react/no-unstable-nested-components
    return <SvgXml xml={xml} width={size} height={size} />;
}
