import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useGameStore } from "../store";

export const Character = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/male.gltf");
  const { actions } = useAnimations(animations, group);
  
  const characterState = useGameStore((state) => state.characterState);


  useEffect(() => {
    if (actions[characterState]) {
      actions[characterState].reset().fadeIn(0.2).play();
    } else {
      console.warn(`Action for character state '${characterState}' not found.`);
    }
    return () => {
      if (actions[characterState]) {
        actions[characterState].fadeOut(0.2);
      }
    };
  }, [characterState]);

  return (
    <>
     <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Root003" scale={0.64}>
          <primitive object={nodes.LeftFootCtrl} />
          <primitive object={nodes.RightFootCtrl} />
          <primitive object={nodes.HipsCtrl} />
          <skinnedMesh
            name="characterMedium"
            geometry={nodes.characterMedium.geometry}
            material={materials["skin.001"]}
            skeleton={nodes.characterMedium.skeleton}
          />
        </group>
      </group>
    </group>
    </>
  );
};

useGLTF.preload("/male.gltf");
