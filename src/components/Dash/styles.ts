import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 40px;
    }
    .aside{
        display: flex;
        flex-direction: column;
        
    }
    .textDashboard{
        font-size: 48px;
    line-height: 1.08349;
    font-weight: 600;
    letter-spacing: -.003em;
    font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    display: inline;
    }
    .asideOne{
        display: flex;
        
    }
    .asideOne-Image{
        width: 30px;
    }
    .asideOne-Img{
        width: 30px;
        border-radius: 50%;
    }
    .asideOne-Text{
        display: flex;
        flex-direction: column;
       
    }
    .asideAfter{
        display: flex;
        align-items: center;
    }
    img{
        width: 70px;
    }
`