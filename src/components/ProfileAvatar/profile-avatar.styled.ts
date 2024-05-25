import theme from "shared/theme";
import styled from "styled-components/native";

export const StyledAvatar = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    border-width: 2px;
    border-color: ${theme.colors.primary500};
    position: relative
`