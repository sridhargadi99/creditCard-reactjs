// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardContainer1,
  Heading,
  HrRule,
  CardContainer2,
  CardNumber,
  CardHolderName,
  Name,
  TextContainer,
  TextSubContainer,
  ContentHeading,
  ContentInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const onChangeNumber = event => setCardNumber(event.target.value)
  const onChangeCardHolderName = event => setCardHolderName(event.target.value)
  return (
    <MainContainer>
      <CardContainer>
        <CardContainer1>
          <Heading>CREDIT CARD</Heading>
          <HrRule />
        </CardContainer1>
        <CardContainer2 data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>
            CARDHOLDER NAME <br />
            <Name>{cardHolderName.toUpperCase()}</Name>
          </CardHolderName>
        </CardContainer2>
      </CardContainer>
      <TextContainer>
        <TextSubContainer>
          <ContentHeading>Payment Method</ContentHeading>
          <ContentInput
            type="text"
            value={cardNumber}
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <ContentInput
            type="text"
            value={cardHolderName}
            placeholder="Cardholder Name"
            onChange={onChangeCardHolderName}
          />
        </TextSubContainer>
      </TextContainer>
    </MainContainer>
  )
}

export default CreditCard
