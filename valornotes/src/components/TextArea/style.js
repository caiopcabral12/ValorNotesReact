import styled from "styled-components";


export const Container = styled.textarea`
      display: flex;
      width: 100%;
      
      width: 100%;
      height: 150px;
      border: none;
      display: flex;
      resize: none;

      padding: 13px;
    
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${({theme}) => theme.COLORS.WHITE};

      border-radius: 10px;

      &:hover{
          filter: brightness(1.2);
          transition: 0.2s;}

`