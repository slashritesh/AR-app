
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cube from './Cube'

const CubeContainer = () => {
  return (
    <div className='canvas'>
    <Canvas>
        <Cube />
    </Canvas>
    </div>
  )
}

export default CubeContainer