import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 3% auto;
  width: 85vw;
  padding: 2% 5%;
  background-color: #e5e5e5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);

  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

