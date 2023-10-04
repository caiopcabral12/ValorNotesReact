import { styled } from "styled-components";

export const Container = styled.button`
   background: none;
   border: none;
   color: ${({theme, isActive}) => isActive ? theme.COLORS.GREEN : theme.COLORS.GRAY_100};
   transition: 0.2s; 
  `
