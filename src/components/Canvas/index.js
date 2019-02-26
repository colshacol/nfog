import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: -1;
    background: url("/checkeredBG.jpg");
    background-position: center;
    background-repeat: repeat;
  }
`;

export const Canvas = props => {
  return (
    <Container>
      {props.layers.map((layer, index) => {
        const { tag: Tag, styles, attributes, children, hidden } = layer;

        if (hidden) return null;

        const style = {
          zIndex: index,
          ...styles,
          display: "flex",
          top: `${styles.top}%`,
          left: `${styles.left}%`,
          width: `${styles.width}%`,
          height: `${styles.height}%`
        };

        console.log(style);
        return (
          <Tag className="DisplayLayer" style={style} {...attributes}>
            {children}
          </Tag>
        );
      })}
    </Container>
  );
};
