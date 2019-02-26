import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import nanoid from "nanoid";

import { CanvasMaster } from "./components/CanvasMaster";
import { CanvasLayers } from "./components/CanvasLayers";
import { Canvas } from "./components/Canvas";
import { TopBar } from "./components/TopBar";
import { useLayers } from "./state/useLayers";

import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  padding: 24px 0px;
  justify-content: space-between;
  height: 100%;
`;

const App = props => {
  const layers = useLayers();
  return (
    <Container>
      <TopBar />
      <Main>
        <CanvasMaster layers={layers} />
        <Canvas layers={layers.list} />
        <CanvasLayers layers={layers} />
      </Main>
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
