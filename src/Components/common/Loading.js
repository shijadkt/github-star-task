import React from "react";

import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

// Keyframes for the spinning animation
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Optional overlay effect */
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #ccc;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingSpinner;
