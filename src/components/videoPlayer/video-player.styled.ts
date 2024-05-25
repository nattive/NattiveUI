import { Dimensions } from "react-native";
import normalize from "react-native-normalize";
import styled from "styled-components/native";

export const StyledImageBackground = styled.ImageBackground`
    height: ${normalize(300)};
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const StyledPlayImageWrapper = styled.Image`
    width: ${normalize(100)};
    height: ${normalize(100)};
`