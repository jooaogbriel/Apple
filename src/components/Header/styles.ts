import styled from "styled-components";

export const Container = styled.div`
    ul {
        z-index: 1;
        inset: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 5vh;
        background-color:#f2f2f1;
    }
    li{
        padding: 3vh;
        font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -.01em;
        color: #565656;
    }
    img{
        width: 17px;
    }
    @media (min-width: 700px) {
    .menuMobile {
      display: none;
    }
  }
    
`