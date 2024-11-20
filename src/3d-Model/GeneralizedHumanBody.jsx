import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';

export function GeneralizedHumanBodyModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/generalized_human_body.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    const currentAction = actions[names[animationIndex]];
    
    // Check if the action exists before attempting to reset and play it
    if (currentAction) {
      currentAction.reset().fadeIn(0.5).play();
      return () => {
        actions[names[animationIndex]].fadeOut(0.5);
      };
    }
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f542659f21ce4decaad3836a0235e414fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="GenHuman" position={[0, 1.807, 0.055]} />
                <group name="rig" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      castShadow
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Sycranian}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_8" position={[0, 1.807, 0.055]} />
                  </group>
                </group>
                <group name="Floor">
                  <mesh
                    name="Floor_Floor_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor_Floor_0.geometry}
                    material={materials.Floor}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/generalized_human_body.glb');
