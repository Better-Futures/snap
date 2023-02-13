import React from 'react';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Message = styled.p`
  font-size: large;
  text-align: center;
  padding: 2px 0;
`;

const Spinner = ({message}) => {
  return (
    <Container>
      <Circles color='#00bfff' height={50} width={200} />
      <Message>{message}</Message>
    </Container>
  )
}

export default Spinner