import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import BasicObject from "../objects/BasicObject";

const BasicScene = () => {
  const [visible, setVisibility] = useState(true);
  const [wireframe, setWireframe] = useState(false);

  const basicMeshProps = {
    visible,
    wireframe,
  };

  return (
    <div className="basic-scene">
      <div id="canvas-container">
        <Canvas>
          <BasicObject {...basicMeshProps} />
        </Canvas>
      </div>

      <div className="row">
        <button onClick={() => setVisibility(!visible)}>
          {(visible ? "Hide" : "Show") + " Models"}
        </button>
        <button
          disabled={!visible}
          className={wireframe ? "strike-through" : ""}
          onClick={() => setWireframe(!wireframe)}
        >
          Wireframes
        </button>
      </div>
    </div>
  );
};

export default BasicScene;
