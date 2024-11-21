import React from "react";

import styled from "styled-components";

const InfoComponent = ({ message = "No more data to display." }) => {
  return (
    <Container>
      <Icon>ℹ️</Icon>
      <Message>{message}</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #555;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export default InfoComponent;
