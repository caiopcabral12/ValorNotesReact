import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   
   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas:
   "header"
   "content";

   > main {
      grid-area: content;
      padding: 64px 0;
   }
   `;

export const Links = styled.ul`
   list-style: none;

   > li {
    margin-top: 10px;
    margin-left: 10px;
}
   a {
    color: ${({theme}) => theme.COLORS.WHITE}
   }
   `

export const Content = styled.div`
   max-width: 550px;
   margin: 0 auto;

   display: flex;
   flex-direction: column;

   > button:first-child{
      align-self: end;
   }

   >h1{
      font-size: 36px;
      font-weight: 500;
      padding-top: 46px;
   }

   > p {
      margin-top: 12px;
      margin-left: 10px;
      margin-bottom: 28px;
      text-align: justify;
   }
`



