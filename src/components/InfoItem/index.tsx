import React from 'react';
import { RiWindyLine } from 'react-icons/ri'
import { IoIosWater } from 'react-icons/io'


import { Container, Local, MainWeather, WeatherIcon, Temperature, Header, InfoBox, Info, NotFound } from './styles';

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


interface InfoItemProps {
  local: LocalItem | undefined;
}

const InfoItem: React.FC<InfoItemProps> = ({local}) => {

  function convertToCelsius(temp: number){
    return (temp - 273.15).toFixed(2);
  }

  if (local) {
    return (
      <Container>
        <Header>
        <Local>
          <span>{local.name}</span>,
          <span>{local.sys.country}</span>
        </Local>
  
        <InfoBox>
        <Info>
        <strong>
          <IoIosWater />
          Humidity:
          </strong>
          
         <span>{local.main.humidity}%</span>
        </Info>
  
        <Info> 
         <strong>
            <RiWindyLine />  
            Wind:
           </strong>
  
         <span>{local.wind.speed} m/s</span>
        </Info>
  
        </InfoBox>
  
        </Header>
  
        <MainWeather>
          <WeatherIcon src={`http://openweathermap.org/img/wn/${local.weather[0].icon}@2x.png`}/>
          {local.weather[0].description}
        </MainWeather>
  
        <Temperature>
          <strong>{convertToCelsius(local.main.temp)}º C</strong>
          <span>máx: {convertToCelsius(local.main.temp_max)}º C</span>
          <span>min: {convertToCelsius(local.main.temp_min)}º C</span>
        </Temperature>
  
    
      </Container>
    );
  } else {
    return (
      <Container>
        <NotFound>
        <h1>Faça uma pesquisa</h1>
        </NotFound>
      </Container>
    );
  }
};

export default InfoItem;
