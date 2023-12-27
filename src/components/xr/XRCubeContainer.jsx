
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ARButton, XR } from '@react-three/xr'
import { Model } from './DragonModel'
import { OrbitControls } from '@react-three/drei'




const XRCubeContainer = () => {
  return (
    <div className='canvas'>
      <ARButton />
    <Canvas>
      <XR>
      <OrbitControls />
      <ambientLight /> 
        <Model position-x={0} position-z={-3} position-y={0} />
      </XR>
    </Canvas>
    </div>
  )
}

export default XRCubeContainer