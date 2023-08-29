import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        height: 100px;
        width: 100%;
        padding: 60px;
        
        display: flex;
        align-items: center;
    
      svg {
          color: ${({theme}) => theme.COLORS.WHITE};
      }
    }

     
`

export const Form = styled.form`
     max-width: 340px;
     margin: 30px auto 0;

     > div:nth-child(4){
        margin-top: 24px
     }

     > button {
        margin-top: 20px;
     }
     `
    

export const ProfilePic = styled.div`
    position: relative;
    margin: -120px auto 32px;

    width: 180px;
    height: 180px;



    >img{ 
     width: 180px;
     height: 180px;
    border-radius: 50%;
    }

    > label {
     width: 48px;
     height: 48px;

     
     background-color: ${({theme}) => theme.COLORS.GREEN};
     border-radius: 50%;

     display: flex;
     align-items: center;
    

     position: absolute;
     bottom: 7px;
     right: 7px;

     cursor: pointer;

     input {
        display: none;
     }
    
     svg {  
        position: absolute;
        width: 18px;
        height: 18px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin: 15px;
        
     }


    }



   
`


