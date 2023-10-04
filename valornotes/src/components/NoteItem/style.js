import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
     
    background-color: ${({theme, IsNew}) => IsNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    border: ${({theme, IsNew}) => IsNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none" };
    
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

    > button {
        display: flex;
        justify-content: center;
        padding: 10px;
        
        background-color: transparent;
        
       >svg {
            height: 30px;
            width: 27px;
            

            color: ${({theme, IsNew}) => IsNew ? `${theme.COLORS.GRAY_300}` : theme.COLORS.RED}; 
        }
       
    }

      

    

`