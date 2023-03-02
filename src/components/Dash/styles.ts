import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    h1{
        font-size: 46px;
        color: #6e6e73;
        font-weight: 500;
        letter-spacing: -.003em;
        line-height: 1.08349;
    }
    .aside{
        display: flex;
        flex-direction: column;
    }
    .main{
        display: flex;
        align-items: center;
    }
    .textDashboard{
        font-size: 48px;
        line-height: 1.08349;
        font-weight: 600;
        letter-spacing: -.003em;
        font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        display: inline;
        max-width: 640px;
        padding: 80px 130px 64px 20px;
    }
    .asideOne{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .asideOne-Image{
        width: 30px;
        height: 30px;
        padding-right: 8px;
    }
    .asideOne-Img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        padding-right: 8px;
    }
    .asideOne-Text{
        display: flex;
        flex-direction: column;
        padding-bottom: 12px;
    }
    span{
        color: black;
    }
    a{
        font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-weight: 600;
        font-size: 14px;
        padding:3px;
    }
    .link{
        color: #06c;
        cursor: pointer;
        font-weight: normal;
    }
    .asideAfter{
        display: flex;
        align-items: center;
        height: 148px;
        min-width: 136px;
        padding: 18px 8px 16px;
        max-width: 640px;
        padding: 30px 370px 64px 20px;
    }
    img{
        width: 70px;
    }
    p{
        font-size: 14px;
        color: #1d1d1f;
        font-weight: 520;
        font-family: SF Pro Text,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        letter-spacing: -.016em;
        line-height: 1.42859;
    }
    .imageDash{
        max-height: 78px;
        height: 130px;
        width: 120px;
        padding-bottom: 16px;
        padding-right: 25px;
    }
    .asideAfter-text{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`