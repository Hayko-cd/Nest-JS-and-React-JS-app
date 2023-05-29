import styled from "styled-components";

export const FullWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: silver;
`;

export const ExperimentTitle = styled.span``;

export const ExperimentBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ExperimentButton = styled.button`
  width: max-content;
  background: ${({ color }) => color ? color : null};
  border: unset;
  outline: unset;
  color: white;
  text-align: left;
`;
