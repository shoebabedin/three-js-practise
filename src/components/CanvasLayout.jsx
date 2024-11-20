import { Environment, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import CameraControls from "./CameraControls";
import { CameraKeyboardControls } from "./CameraKeyboardControls";
import Interface from "./Interface";
import { Loader } from "./Loader";

const CanvasLayout = ({ children }) => {
  const location = useLocation();
  const reload = location.pathname;

  const leaveSection = ["/dance", "/human-body", "/hawkeye"];

  return (
    <>
      <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [5, 0, -5] }} shadows>
        <Suspense fallback={<Loader />}>
          <CameraControls />
          <CameraKeyboardControls />
          <ambientLight intensity={0.1} />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <group position={[0, -1, 0]}>{children}</group>
          <Environment preset="sunset" background />
          <Plane
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
            args={[10, 10]}
          >
            <shadowMaterial transparent opacity={0.2} />
          </Plane>
        </Suspense>
      </Canvas>
      {leaveSection.includes(reload) && <Interface />}
    </>
  );
};

export default CanvasLayout;
