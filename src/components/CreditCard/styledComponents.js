// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  padding: 20px;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`
export const CardContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0px;
  padding-left: 17px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const HrRule = styled.hr`
  border: 2px solid #ffd773;
  width: 130px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`
export const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 8px;
  height: 250px;
  width: 100%;
  padding-left: 30px;
  @media screen and (min-width: 768px) {
    height: 350px;
    background-size: cover;
  }
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`

export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 400;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  padding: 30px 20px 30px 20px;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 50%;
  }
`
export const TextSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 16px 0px #d3d9e0;
  height: 80%;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    height: 350px;
    padding: 30px;
  }
`
export const ContentHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 27px;
  font-weight: 700;
  color: #475569;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const ContentInput = styled.input`
  height: 40px;
  width: 90%;
  cursor: pointer;
  outline: none;
  border: 1px solid #c3cad9;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 500;
  color: #475569;
  padding-left: 15px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 80%;
  }
`
