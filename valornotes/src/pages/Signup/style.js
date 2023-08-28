import { styled } from "styled-components";


export const Container = styled.div`
   width:100%;
   height:99.9vh;
   
   display: grid;
   grid-template-columns: auto 550px;
   grid-template-rows: auto;
   grid-template-areas: 
   "background form";
   
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`;

export const Form = styled.div`
    grid-area: form;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 90px;

    > h1 {
        font-family: 'Yatra One', cursive;
        color: ${({theme}) => theme.COLORS.GREEN};
    }
      
    >p{
        font-size: small;
        color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    > h2 {
        padding: 40px;
        font-weight: bold;
    }
    
    > button {
        margin-top: 15px;
    }
    
    > a {
        margin-top: 40px;
    }
`;

export const Background = styled.div`
   grid-area: background;
   
   display: flex;
   background-image: url(https://images2.alphacoders.com/132/1322753.jpeg);   
   background-size: cover;
   filter: brightness(50%);
`;

