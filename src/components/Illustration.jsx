import React from 'react';
import {
  BASE,
  HEAD,
  BODY,
  LEFTARM,
  RIGHTARM,
  LEFTLEG,
  RIGHTLEG,
  LEFTEYE,
  RIGHTEYE,
  MOUTH,
} from '../shared/assets/images/hangmanImg'
import { 
  Container,
} from './Illustration.styled';

const Illustration = () => {
  return (
    <Container>
      <MOUTH />
    </Container>
  )
}

export default Illustration;