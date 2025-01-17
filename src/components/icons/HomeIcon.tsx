import React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'shared/theme';

export default function HomeIcon({
    color = theme.colors.text,
    size = 20,
}: {
    color?: string;
    size?: number;
}) {
    const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.825 18.9584H5.175C2.89167 18.9584 1.04167 17.1001 1.04167 14.8167V8.64173C1.04167 7.50839 1.74167 6.08339 2.64167 5.38339L7.13333 1.88339C8.48333 0.833393 10.6417 0.783393 12.0417 1.76673L17.1917 5.37506C18.1833 6.06673 18.9583 7.55006 18.9583 8.75839V14.8251C18.9583 17.1001 17.1083 18.9584 14.825 18.9584ZM7.9 2.86673L3.40833 6.36673C2.81667 6.83339 2.29167 7.89173 2.29167 8.64173V14.8167C2.29167 16.4084 3.58333 17.7084 5.175 17.7084H14.825C16.4167 17.7084 17.7083 16.4167 17.7083 14.8251V8.75839C17.7083 7.95839 17.1333 6.85006 16.475 6.40006L11.325 2.79173C10.375 2.12506 8.80833 2.15839 7.9 2.86673Z" fill="${color}" />
  <path d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V12.5C9.375 12.1583 9.65833 11.875 10 11.875C10.3417 11.875 10.625 12.1583 10.625 12.5V15C10.625 15.3417 10.3417 15.625 10 15.625Z"  fill="${color}"    />
  </svg>
`;
    // eslint-disable-next-line react/no-unstable-nested-components
    return <SvgXml xml={xml} width={size} height={size} />;
}
