import { styled } from "styled-components";

export const Container = styled.button`

    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    border-radius: 10px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
      
    > h1{
        color: ${({theme}) => theme.COLORS.WHITE};
        padding: 15px;
    }
    > footer {
        color: ${({theme}) => theme.COLORS.WHITE};
        padding: 15px;
    }

    
 `