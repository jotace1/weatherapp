import styled from 'styled-components';
import { shade } from 'polished';
import backgroundInfo from '../../assets/backgroundInfo.svg'
export const Container = styled.div`
    background: url(${backgroundInfo}) no-repeat right bottom;
    background-color: #F0F0F0;
    background-size: 50% 50%;
    height: 100vh;

    display: flex;
    justify-content: center;
`;

export const Box = styled.div`
    border-radius: 8px;
    max-height: 600px;
    max-width: 800px;
    height: 100%;
    width: 100%;

    
`;

export const Header = styled.div`
    margin-top: 50px;
    display:flex;
    align-items: center;
    justify-content: space-between;

`;

export const Logo = styled.img`
    width: 60px;
    height: 60px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    p {
        color: #CCBCBC;
        font-weight: bold;
        font-size: 20px;
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    margin-left: 30px;
`;

export const SearchInput = styled.input`
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border-right: 0;
    outline: none;

`;

export const SubmitButton = styled.button`
    width: 110px;
    height: 50px;

    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')};
    }
`;

export const Main = styled.main`
    height: 100%;
`;

export const Error = styled.strong`
    margin-left: 240px;
    color: red;
`;