import React from "react";

const Sphere = ({ visible, wireframe }) => {
  return (
    <mesh rotation-y={Math.PI * 0.1} position-x={-1.5} visible={visible}>
      <sphereGeometry />
      <meshStandardMaterial color="purple" wireframe={wireframe} />
    </mesh>
  );
};

export default Sphere;
