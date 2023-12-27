
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ARButton, XR } from '@react-three/xr'
import { Model } from './DragonModel'
import { OrbitControls } from '@react-three/drei'
import XRCube from './XRCube'




const XRCubeContainer = () => {
  return (
    <div className='canvas'>
      <ARButton />
    <Canvas>
      <XR>
      <OrbitControls />
      <ambientLight  intensity={0.5}/> 
        <Model position-x={0} position-z={-3} position-y={0} />
        <XRCube />
      </XR>
    </Canvas>
    </div>
  )
}

export default XRCubeContainer