import { styled } from "styled-components";

export const Container = styled.div`
        display: flex;
        width: 100%;
        align-items: center;
     
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};
        
        margin-bottom: 10px;
        border-radius: 10px;

        &:hover{
            filter: brightness(1.2);
            transition: 0.2s;}

    >input {
        width: 100%;
        height: 56px;
        padding: 13px;
        border: none;

        background-color: transparent;
        color: ${({theme}) => theme.COLORS.WHITE};
    
}

    > svg {
        margin-left: 16px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }

`