import { Environment } from "@react-three/drei";
import environments from "./environments";

// Environment Component
export const AnimationEnvironment = ({ animationName }) => {
  const envSettings = environments[animationName] || environments.idle;

  return (
    <Environment
      preset={envSettings.preset}
      background
      intensity={envSettings.intensity}
    />
  );
};
