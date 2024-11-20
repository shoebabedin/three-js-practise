import { KeyboardControls, Loader, useFont, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import React, { Suspense, useMemo } from "react";
import { Experience } from "./Experience";
import Menu from "./Menu";


export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};


const ControllingCanvasLayout = () => {
  useFont.preload("/assets/fonts/NotoSans.json");
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  const { progress } = useProgress();
  return (
    <KeyboardControls map={map}>
      <Leva hidden />
      <Canvas shadows camera={{ position: [0, 20, 14], fov: 42 }}>
        <color attach="background" args={["#e3daf7"]} />
        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
      {progress === 100 && <Menu />}
      <Menu/>
    </KeyboardControls>
  );
};

export default ControllingCanvasLayout;
