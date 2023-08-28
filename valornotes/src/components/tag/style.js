import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.GREEN};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    border-radius: 5px;
    margin: auto;
    margin-right: 10px;
    width: 64px;
    height: 24px;
    font-size: 12px;
    font-style: bold;
`

