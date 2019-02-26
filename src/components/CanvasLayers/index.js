import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  min-width: 320px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-right: none;
  border-radius: 6px 0 0 6px;
  box-shadow: 2px 2px 16px -2px rgba(0, 0, 0, 0.025);
  margin-left: 24px;
  overflow: hidden;
  height: calc(100vh - (32px + 60px + 96px));

  .noLayers {
    opacity: 0.5;
    display: flex;
    justify-content: center;
    padding: 24px;
  }
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

const LayersList = styled.div`
  padding: 12px;
  position: relative;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  min-height: calc(100% - 34px);
  max-height: calc(100% - 34px);
`;

const LayerDetail = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;
  border-bottom: 1px solid #f2f2f2;
  transition: all 0.3s;
  padding: 0 12px;

  .main {
    display: flex;
    flex-direction: row;
    max-height: 48px;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    width: 50%;
  }

  .right {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    max-height: 48px;

    img {
      margin-left: 12px;
    }

    .hide {
      max-width: 16px;
      opacity: ${props => (props.hidden ? "0.5" : "1")};
    }

    .delete {
      max-width: 16px;
    }

    .more {
      max-width: 16px;
    }
  }
`;

export const CanvasLayers = props => {
  return (
    <Container>
      <Top>LAYERS</Top>
      {!props.layers.list.length && (
        <small className="noLayers">No layers to show you. :(</small>
      )}
      {!!props.layers.list.length && (
        <LayersList>
          {props.layers.list.map(layer => (
            <Details layers={props.layers} layer={layer} />
          ))}
        </LayersList>
      )}
    </Container>
  );
};

const Details = props => {
  const [optionsShown, setOptionsShown] = React.useState(false);
  const toggleOptions = () => setOptionsShown(!optionsShown);

  React.useEffect(() => {
    return () => {
      //   setOptionsShown(false);
    };
  });

  const _delete = () => props.layers.deleteLayer(props.layer.id);
  const toggleHidden = () => props.layers.toggleHiddenLayer(props.layer.id);
  const addY = () => props.layers.setLayerYPosition(props.layer.id, 10);
  const minusY = () => props.layers.setLayerYPosition(props.layer.id, -10);
  const addX = () => props.layers.setLayerXPosition(props.layer.id, 10);
  const minusX = () => props.layers.setLayerXPosition(props.layer.id, -10);
  const hiddenSvg = props.layer.hidden ? "/eye.svg" : "/hiddenEye.svg";

  return (
    <LayerDetail hidden={props.layer.hidden} key={props.layer.id}>
      <div className="main">
        <div className="left">
          <p>{props.layer.name}</p>
        </div>
        <div className="right">
          <img className="hide" src={hiddenSvg} onClick={toggleHidden} />
          <img className="delete" src="/trashCan.svg" onClick={_delete} />
          <img className="more" src="/more.svg" onClick={toggleOptions} />
        </div>
      </div>
      <LayerOptions
        shown={optionsShown}
        layer={props.layer}
        layers={props.layers}
      />
    </LayerDetail>
  );
};

const OptionsContainer = styled.div`
  display: ${props => (props.shown ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  z-index: 20;
  margin: 12px 0;

  .optionRow {
    padding: 0 12px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    input {
      width: 100%;
    }

    small {
      width: 100%;
    }
  }
`;

const LayerOptions = props => {
  const setWidth = event => {
    props.layers.setLayerWidth(props.layer.id, Number(event.target.value));
  };
  const setHeight = event => {
    props.layers.setLayerHeight(props.layer.id, Number(event.target.value));
  };
  const setX = event => {
    props.layers.setLayerXPosition(props.layer.id, Number(event.target.value));
  };
  const setY = event => {
    props.layers.setLayerYPosition(props.layer.id, Number(event.target.value));
  };
  const setName = event => {
    props.layers.setLayerName(props.layer.id, event.target.value);
  };

  return (
    <OptionsContainer shown={props.shown}>
      <div className="optionRow">
        <small>NAME: </small>
        <input type="name" value={props.layer.name} onChange={setName} />
      </div>
      <div className="optionRow">
        <small>WIDTH: </small>
        <input
          type="number"
          value={props.layer.styles.width}
          onChange={setWidth}
        />
      </div>
      <div className="optionRow">
        <small>HEIGHT: </small>
        <input
          type="number"
          value={props.layer.styles.height}
          onChange={setHeight}
        />
      </div>
      <div className="optionRow">
        <small>X ALIGNMENT: </small>
        <input type="number" value={props.layer.styles.left} onChange={setX} />
      </div>
      <div className="optionRow">
        <small>Y ALIGNMENT: </small>
        <input type="number" value={props.layer.styles.top} onChange={setY} />
      </div>
    </OptionsContainer>
  );
};
