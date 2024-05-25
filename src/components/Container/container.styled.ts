import theme from "shared/theme";
import styled from "styled-components/native";

export const StyledContainer = styled.ScrollView<{ topInsect: number }>`
    padding: ${theme.spacing.s}px;
    margin-bottom:  ${theme.spacing.s}px;
    background-color: white
    `
