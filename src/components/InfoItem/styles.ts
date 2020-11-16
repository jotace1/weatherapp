import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 80px;
`;

export const NotFound = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #CCBCBC;
    h1 {
        margin-bottom: 100px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Local = styled.div`
    font-size: 50px;

    span {
        line-height: 40px;
        & + span {
            margin-left: 10px;
        }
    }
`;

export const InfoBox = styled.div`
    flex: 1;
    margin-left: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    strong {
        display: flex;
        align-items: center;
        font-size: 20px;

        svg {
            margin-right: 4px;
        }

    }

`;


export const MainWeather = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #CCBCBC;
`;

export const WeatherIcon = styled.img`
height: 64px;
width: 64px;
`;

export const Temperature = styled.div`
    margin-top : 70px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 50px;
    }
    span {
        color: #CCBCBC;
        font-size: 20px;
    }
`;