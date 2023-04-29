import React, { forwardRef } from "react";

const Box = ({ visible, wireframe }, boxRef) => {
  return (
    <mesh
      ref={boxRef}
      scale={1.5}
      rotation-y={Math.PI * 0.1}
      position-x={1.5}
      visible={visible}
    >
      <boxGeometry />
      <meshStandardMaterial color="red" wireframe={wireframe} />
    </mesh>
  );
};

export default forwardRef(Box);
