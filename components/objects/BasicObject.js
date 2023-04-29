import React, { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Box from "../meshes/Box";
import Sphere from "../meshes/Sphere";
import Floor from "../meshes/Floor";

extend({ OrbitControls });

const BasicObject = (props) => {
  const boxRef = useRef(null);
  const groupRef = useRef(null);
  // the use three hook gives us access to the same
  // information in the 'state' values in the useFrame hook (but only in the first frame)
  const { camera, gl } = useThree();
  console.log(camera);

  useFrame((state, delta) => {
    // console.log("state: ",state)
    // console.log("delta: ", delta);
    // console.log("native threejs mesh: ", boxRef)
    boxRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += (delta);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <Sphere {...props} />
        <Box ref={boxRef} {...props} />
      </group>
      <Floor {...props} />
    </>
  );
};

export default BasicObject;
