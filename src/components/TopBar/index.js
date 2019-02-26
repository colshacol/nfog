import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #4a5660;
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  height: 36px;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 16px -2px rgba(0, 0, 0, 0.025);
`;

export const TopBar = props => {
  return (
    <>
      <Container>
        <p>nfog</p>
      </Container>
      <Bottom />
    </>
  );
};
