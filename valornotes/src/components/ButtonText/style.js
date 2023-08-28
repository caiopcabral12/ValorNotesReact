import { styled } from "styled-components";

export const Container = styled.button`
   background: none;
   border: none;
   color: ${({theme}) => theme.COLORS.GREEN};
   transition: 0.2s;
`;
