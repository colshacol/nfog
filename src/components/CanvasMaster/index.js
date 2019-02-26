import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 92px;
  min-width: 92px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 0 6px 6px 0;
  border-left: none;
  margin-right: 24px;
  box-shadow: 2px 2px 16px -2px rgba(0, 0, 0, 0.025);
`;

const Top = styled.div`
  height: 36px;
  background: #4a5660;
  color: #fff;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const CanvasMaster = props => {
  return (
    <Container>
      <Top>INSERT</Top>
      <CanvasActions>
        <div className="action">
          <img
            src="/textIcon.svg"
            className="creationIcon"
            onClick={() =>
              props.layers.createTextLayer({
                name: "text0",
                text: "Howdy all yall people."
              })
            }
          />
          <small>TEXT</small>
        </div>
        <div className="action">
          <img
            src="/imageIcon.svg"
            className="creationIcon"
            onClick={() =>
              props.layers.createImageLayer({
                name: "image0",
                src: "https://media.flaticon.com/img/flaticon-logo.svg"
              })
            }
          />
          <small>IMAGE</small>
        </div>
      </CanvasActions>
    </Container>
  );
};

const CanvasActions = styled.div`
  padding: 12px;

  display: flex;
  flex-direction: column;
  margin-right: 24px;
  height: 100%;

  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 64px;

    small {
      margin-top: 12px;
      font-weight: 600;
      font-size: 14px;
    }
  }

  .creationIcon {
    max-width: 36px;
  }
`;
