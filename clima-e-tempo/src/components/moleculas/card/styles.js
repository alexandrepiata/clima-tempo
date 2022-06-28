import styled from "styled-components";

export const CardWrapper = styled.div`
  margin: 30px auto;
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 7px rgba(0, 0, 0, 0.05),
    -5px -5px 10px 7px rgba(0, 0, 0, 0.05);
  transition: 1s;
`;

export const CardTitle = styled.div`
  color: black;
  margin: 20px;
  font-size: 20px;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Temperature = styled.div`
  color: black;
  margin: 20px;
  font-size: 50px;
`;

export const Devider = styled.div`
  border-top: 1px solid #bbb;
`;

export const InfoContainer = styled.div`
  color: #707070;
  margin: 20px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
`;

export const Button = styled.button`
  background-color: #81c9fa;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: #81c9fa;
  border: 2px solid #81c9fa;
  &:hover {
    background-color: #81c9fa;
    color: white;
  }
`;
export const Space = styled.div`
  margin-top: 30px;
`;
export const Div = styled.div`
  margin-top: 3px;
`;
