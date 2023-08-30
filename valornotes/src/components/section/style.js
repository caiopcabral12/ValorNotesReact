import styled from "styled-components";

export const Container = styled.section`
    margin: 45px 0 20px;

    > h2 {
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

        padding-top: 10px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;

        
    }

    > div {
        margin-left: 10px;
        margin-top: 10px;
    }

    
`;