import React from "react";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${loading} 0.8s linear infinite;
`;

const LoaderWrapper = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

export default LoaderWrapper;