import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Root003" scale={0.64}>
          <primitive object={nodes.LeftFootCtrl} />
          <primitive object={nodes.RightFootCtrl} />
          <primitive object={nodes.HipsCtrl} />
          <skinnedMesh name="characterMedium" geometry={nodes.characterMedium.geometry} material={materials['skin.001']} skeleton={nodes.characterMedium.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')