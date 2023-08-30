import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "form";

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 0;
        margin-bottom: 20px;
    }


`

export const Form = styled.form`

    color: ${({theme}) => theme.COLORS.WHITE};
    max-width: 550px;
    margin: 38px auto;
    

     > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;


     a {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
     }
    
    
     h1 {
        background-color: ${({theme}) => theme.COLORS.GREEN};
 
        border-radius: 20px;
        padding-left: 10px;
        
        width: 192px;
        margin-bottom: 10px;
        box-shadow: 0 6px 12px rgb(0 0 0 / 70%);
    }  
}
`

export const Content = styled.div`
    overflow-y: scroll;
`
