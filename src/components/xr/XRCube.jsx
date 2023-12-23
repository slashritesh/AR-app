import { useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import React, { useRef } from "react";

const XRCube = () => {
    const cuberef = useRef()
    useFrame((state,delta)=>{
        // console.log(cuberef);
        cuberef.current.rotation.y += 0.03  ;
    })
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <mesh ref={cuberef} position-z={-8}>
        <boxGeometry args={[2,3,2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh ref={cuberef} position-z={-9} position-y={7}>
        <boxGeometry args={[2,3,2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
};

export default XRCube;
