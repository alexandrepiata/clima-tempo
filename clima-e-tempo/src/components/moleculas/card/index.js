import React, { useState, useEffect } from "react";
import api from "../../../services";

import {
  CardWrapper,
  CardTitle,
  TemperatureContainer,
  Temperature,
  InfoContainer,
  Devider,
  Button,
  Space,
  Div,
} from "./styles";
function Card() {
  const [data, setDate] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    const { geolocation } = navigator;
    if (geolocation) {
      geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("GeoLocation not enabled");
    }
  };

  const getCoordinates = (pos) => {
    const { latitude, longitude } = pos.coords;
    console.log(pos);
    api
      .get(
        `?lat=${latitude}&lon=${longitude}&appid=b2f714c6cc898e6899404c300afe6947&units=metric`
      )
      .then((res) => {
        setDate(res.data);
        console.log(res.data);
      });
  };

  if (data == null) {
    return <div>carregando...</div>;
  }
  return (
    <CardWrapper>
      <CardTitle>Tempo agora em {data.name}</CardTitle>
      <TemperatureContainer>
        <Div>
          <img
            alt=""
            src={require(`../../../assets/icons/${
              data.weather[0].icon ? data.weather[0].icon : "unknown"
            }.png`)}
          />
        </Div>
        <Temperature>{data.main.temp | ""}º</Temperature>
      </TemperatureContainer>
      <Devider />
      <InfoContainer>
        <Div>Sensação Termica: {data.main.feels_like | ""}º </Div>
        <Div>Temperatura Máxima: {data.main.temp_max | ""}º</Div>
        <Div>Temperatura Mínima: {data.main.temp_min | ""}º</Div>
        <Div>Pressão: {data.main.pressure | ""} hPa</Div>
        <Div>Humidade: {data.main.humidity | ""}%</Div>
        <Div>Vento: {data.wind.speed} M/s</Div>
      </InfoContainer>
      <Devider />
      <Space />
      <Button
        onClick={() => {
          setDate(null);
          getLocation();
        }}
      >
        Atualizar
      </Button>
    </CardWrapper>
  );
}

export default Card;
