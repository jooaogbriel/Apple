import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
 
    .Scrolbar{
        border-radius: 5px;
        background-color: white;
        margin: 10px;
        min-height: 500px;
    }
    img{
        width: 300px;
        height: 400px;
    }
    h2{
            font-size: 28px;
            color: #6e6e73;
            font-weight: 500;
            letter-spacing: -.003em;
            line-height: 1.08349;
    }
    span{
        color: black;
    }
    .textNews{
        font-size: 48px;
        line-height: 1.08349;
        font-weight: 600;
        letter-spacing: -.003em;
        font-family: SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
        
        max-width: 640px;
        //padding: 80px 130px 64px 20px;
        
    }
    .cards{
        display: flex;
        align-items: center;
        height: 148px;
        min-width: 136px;
        
        max-width: 640px;
        padding: 30px 370px 64px 200px;
        
    }
    
    .cards-info figcaption {
        top: 140px;
        right: 20px;
        font-size: 20px;
        color: black;
        padding: 10px;
 
}
   
`