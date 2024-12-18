/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Hero Craft (https://sketchfab.com/herocrafthub)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hawkeye-f010586621ca4cf686ba5775a2371872
Title: Hawkeye
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

export function HawkeyeModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hawkeye.glb");
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
          <group
            name="8d0b8303169a4117acb6c90bd4cd9c09fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Hawkeye_Skin01">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      castShadow
                      name="Object_133"
                      geometry={nodes.Object_133.geometry}
                      material={
                        materials[
                          "4B6A1968965A6A8DDDB0552EF1C26FBEEA983CCE.001"
                        ]
                      }
                      skeleton={nodes.Object_133.skeleton}
                    />
                    <group name="Object_132" position={[0, 1.807, 0.055]}/>
                  </group>
                </group>
                <group name="Char_Hawkeye_Skin01_HawkGuy" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/hawkeye.glb");
