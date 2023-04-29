import React from "react";

const Floor = ({ visible, wireframe }) => {
  return (
    <mesh
      scale={10}
      rotation-x={Math.PI * -0.5}
      position-y={-1}
      visible={visible}
    >
      <planeGeometry />
      <meshStandardMaterial color="greenyellow" wireframe={wireframe} />
    </mesh>
  );
};

export default Floor;
