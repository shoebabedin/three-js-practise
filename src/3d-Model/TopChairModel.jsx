/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'

export function TopChairModel(props) {
  const { nodes, materials } = useGLTF('/topChairModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.812, 1.305, -1.533]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube318.geometry}
          material={nodes.Cube318.material}
          position={[-0.68, 0.119, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/topChairModel.glb')