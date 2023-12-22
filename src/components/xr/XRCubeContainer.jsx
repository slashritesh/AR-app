
import { Canvas } from '@react-three/fiber'
import React from 'react'
import XRCube from './XRCube'
import { ARButton, XR } from '@react-three/xr'

const XRCubeContainer = () => {
  return (
    <div className='canvas'>
      <ARButton />
    <Canvas>
      <XR>
        <XRCube />
      </XR>
    </Canvas>
    </div>
  )
}

export default XRCubeContainer