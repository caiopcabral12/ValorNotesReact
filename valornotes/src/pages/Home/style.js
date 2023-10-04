import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const Container = styled.div`
   width:100%;
   height:99.9vh;
   
   display: grid;
   grid-template-columns:250px auto;
   grid-template-rows: 105px 128px auto 79px;
   grid-template-areas: 
   "brand header"
   "menu search"
   "menu content"
   "newnote content";

   background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
   `

export const Brand = styled.div`
   grid-area: brand;
   background: ${({theme}) => theme.COLORS.BACKGROUND_900};
   
   font-family: 'Yatra One', cursive;
   color: ${({theme}) => theme.COLORS.GREEN};

   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
   
   border-right-width: 1px;
   border-right-style: solid;
   border-right-color: ${({theme}) => theme.COLORS.BACKGROUND_600};


   display: flex;
   justify-content: center ;
   align-items: center;
   `;

export const Menu = styled.ul`
   grid-area: menu;
   background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

   padding-top: 64px;
   text-align: center;

   border-right-width: 1px;
   border-right-style: solid;
   border-right-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

   
   border-bottom-width: 1px;
   border-bottom-style: solid;
   border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

   > li {
      margin-bottom: 24px;
      
      > button:hover {
       color: ${({theme}) => theme.COLORS.GREEN};
       transition: 0.2s;
   }
   }

   
`;

export const Search = styled.div`
   grid-area: search;
   padding: 64px 64px;
   `;
  
  
export const Content = styled.div`
   grid-area: content;
   padding: 0 64px;
   overflow-y: scroll;

`;

export const NewNote= styled(Link)`
   grid-area: newnote;
   background-color: ${({theme}) => theme.COLORS.GREEN};
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${({theme}) => theme.COLORS.WHITE};
   

   border-right-width: 1px;
   border-right-style: solid;
   border-right-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
   
   border-radius: 2px;

    svg {
      margin-right: 8px;
   }

   `;

