import React, { useCallback, useState } from 'react';

import InfoItem from '../../components/InfoItem';

import logoImg from '../../assets/icon.svg';

import { Container, Box, Logo, Title, Header, Form, SearchInput, SubmitButton, Main, Error } from './styles';
import api from '../../services/api';

interface LocalItem {
    name: string;
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
    },
    sys: {
      country: string;
    },
    weather: [
      {
        description: string;
        icon: string;
        main: string;
      },
    ],
  
    wind: {
      speed: number;
    }
  }

const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    const [local, setLocal] = useState<LocalItem | undefined>();


    const handleSearchLocal = useCallback(async (e) => {
     e.preventDefault();
     try {
      const response = await api.get(`weather?q=${inputValue}&appid=48dbb9d4b894d29516a513f7b0fa75af`);

      setLocal(response.data);
      setInputError('');
     } catch (err) {
      setInputError('Erro na busca por essa cidade.');
      setLocal(undefined);
     }
    },[inputValue]);

    return (
        <Container>


        <Box>

        <Header>
        <Title>
        <Logo  src={logoImg} />
        <p>Weather App</p>
        </Title>

        <Form onSubmit={handleSearchLocal}>

        <SearchInput
         placeholder="Digite o local desejado"
         value={inputValue}
         onChange={e => setInputValue(e.target.value)}
         />
        <SubmitButton type="submit">Procurar</SubmitButton>
        </Form>

        </Header>

        <Main>
            {inputError && <Error>{inputError}</Error>}
            <InfoItem local={local} />
        </Main>

        </Box>
        
        </Container>
    );
};

export default Home;