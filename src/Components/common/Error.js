import React from "react";

import styled from "styled-components";

const ErrorComponent = ({ message = "Failed to fetch data.", onRetry }) => {
  return (
    <Container>
      <Heading>Oops!</Heading>
      <Message>{message}</Message>
      {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #f00;
  border-radius: 8px;
  background-color: #ffe6e6;
  color: #900;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const RetryButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #900;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #700;
  }
`;

export default ErrorComponent;
