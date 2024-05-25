import React from 'react';
import { SvgXml } from 'react-native-svg';
import theme from 'shared/theme';

export default function VideoTimeIcon({
    color = theme.colors.text,
    size = 20,
}: {
    color?: string;
    size?: number;
}) {
    const xml = `
    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.63867 11.375H4.63867C1.92367 11.375 0.763672 10.215 0.763672 7.5V4.5C0.763672 1.785 1.92367 0.625 4.63867 0.625H7.63867C10.3537 0.625 11.5137 1.785 11.5137 4.5V7.5C11.5137 10.215 10.3537 11.375 7.63867 11.375ZM4.63867 1.375C2.33367 1.375 1.51367 2.195 1.51367 4.5V7.5C1.51367 9.805 2.33367 10.625 4.63867 10.625H7.63867C9.94367 10.625 10.7637 9.805 10.7637 7.5V4.5C10.7637 2.195 9.94367 1.375 7.63867 1.375H4.63867Z" fill="#54AB6A"/>
<path d="M10.8787 8.93005H1.39868C1.19368 8.93005 1.02368 8.76005 1.02368 8.55505C1.02368 8.35005 1.19368 8.18005 1.39868 8.18005H10.8787C11.0837 8.18005 11.2537 8.35005 11.2537 8.55505C11.2537 8.76005 11.0887 8.93005 10.8787 8.93005Z" fill="#54AB6A"/>
<path d="M10.8787 3.93005H1.39868C1.19368 3.93005 1.02368 3.76005 1.02368 3.55505C1.02368 3.35005 1.18868 3.18005 1.39868 3.18005H10.8787C11.0837 3.18005 11.2537 3.35005 11.2537 3.55505C11.2537 3.76005 11.0887 3.93005 10.8787 3.93005Z" fill="#54AB6A"/>
<path d="M3.62366 11.1051C3.41866 11.1051 3.24866 10.9351 3.24866 10.7301V8.55505C3.24866 8.35005 3.41866 8.18005 3.62366 8.18005C3.82866 8.18005 3.99866 8.35005 3.99866 8.55505V10.7301C3.99866 10.9401 3.82866 11.1051 3.62366 11.1051Z" fill="#54AB6A"/>
<path d="M6.13867 11.3601C5.93367 11.3601 5.76367 11.1901 5.76367 10.9851V8.55505C5.76367 8.35005 5.93367 8.18005 6.13867 8.18005C6.34367 8.18005 6.51367 8.35005 6.51367 8.55505V10.9851C6.51367 11.1901 6.34367 11.3601 6.13867 11.3601Z" fill="#54AB6A"/>
<path d="M8.62366 11.1351C8.41866 11.1351 8.24866 10.9651 8.24866 10.7601V8.55505C8.24866 8.35005 8.41866 8.18005 8.62366 8.18005C8.82866 8.18005 8.99866 8.35005 8.99866 8.55505V10.7601C8.99866 10.9701 8.82866 11.1351 8.62366 11.1351Z" fill="#54AB6A"/>
<path d="M3.62366 3.60505C3.41866 3.60505 3.24866 3.43505 3.24866 3.23005V1.05505C3.24866 0.850054 3.41866 0.680054 3.62366 0.680054C3.82866 0.680054 3.99866 0.850054 3.99866 1.05505V3.23005C3.99866 3.44005 3.82866 3.60505 3.62366 3.60505Z" fill="#54AB6A"/>
<path d="M6.13867 3.86005C5.93367 3.86005 5.76367 3.69005 5.76367 3.48505V1.05505C5.76367 0.850054 5.93367 0.680054 6.13867 0.680054C6.34367 0.680054 6.51367 0.850054 6.51367 1.05505V3.48505C6.51367 3.69005 6.34367 3.86005 6.13867 3.86005Z" fill="#54AB6A"/>
<path d="M6.13867 9.39001C5.93367 9.39001 5.76367 9.22001 5.76367 9.01501V3.51501C5.76367 3.31001 5.93367 3.14001 6.13867 3.14001C6.34367 3.14001 6.51367 3.31001 6.51367 3.51501V9.01501C6.51367 9.22001 6.34367 9.39001 6.13867 9.39001Z" fill="#54AB6A"/>
<path d="M8.62366 3.63505C8.41866 3.63505 8.24866 3.46505 8.24866 3.26005V1.05505C8.24866 0.850054 8.41866 0.680054 8.62366 0.680054C8.82866 0.680054 8.99866 0.850054 8.99866 1.05505V3.26005C8.99866 3.47005 8.82866 3.63505 8.62366 3.63505Z" fill="#54AB6A"/>
</svg>
`;
    // eslint-disable-next-line react/no-unstable-nested-components
    return <SvgXml xml={xml} width={size} height={size} />;
}
