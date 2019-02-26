import * as React from "react";
import nanoid from "nanoid";

export const useLayers = () => {
  const [list, setList] = React.useState([]);

  const createLayer = options => {
    const newLayer = {
      id: nanoid(),
      zIndex: list.length,
      hidden: false,
      styles: {
        position: "absolute",
        top: 0,
        left: 0,
        border: "1px dashed",
        width: 25,
        height: 25
      },
      ...options
    };

    setList([...list, newLayer]);
  };

  const createTextLayer = options => {
    createLayer({
      tag: "p",
      children: options.text,
      name: options.name
    });
  };

  const createImageLayer = options => {
    createLayer({
      tag: "img",
      children: null,
      name: options.name,
      attributes: {
        src: options.src
      }
    });
  };

  const updateLayer = (id, updates) => {
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            ...updates
          };
        }
      })
    );
  };

  const deleteLayer = id => {
    setList(
      list.filter(layer => {
        return layer.id !== id;
      })
    );
  };

  const toggleHiddenLayer = id => {
    setList(
      list.map(layer => {
        return layer.id === id ? { ...layer, hidden: !layer.hidden } : layer;
      })
    );
  };

  const setLayerXPosition = (id, x) => {
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            styles: {
              ...layer.styles,
              left: x
            }
          };
        }

        return layer;
      })
    );
  };

  const setLayerYPosition = (id, y) => {
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            styles: {
              ...layer.styles,
              top: y
            }
          };
        }

        return layer;
      })
    );
  };

  const setLayerWidth = (id, width) => {
    console.log("WIDTH", id, width);
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            styles: {
              ...layer.styles,
              width
            }
          };
        }

        return layer;
      })
    );
  };

  const setLayerHeight = (id, height) => {
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            styles: {
              ...layer.styles,
              height
            }
          };
        }

        return layer;
      })
    );
  };

  const setLayerName = (id, name) => {
    setList(
      list.map(layer => {
        if (layer.id === id) {
          return {
            ...layer,
            name
          };
        }

        return layer;
      })
    );
  };

  return {
    list,
    createTextLayer,
    createImageLayer,
    deleteLayer,
    toggleHiddenLayer,
    setLayerYPosition,
    setLayerXPosition,
    setLayerWidth,
    setLayerHeight,
    setLayerName
  };
};
