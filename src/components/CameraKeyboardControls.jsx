import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

export const CameraKeyboardControls = () => {
  const { camera } = useThree();
  const speed = 0.1; // Adjust speed for movement
  const keys = useRef({}); // Store key states
  const { animations, setAnimationIndex } = useCharacterAnimations();

  // Map keys to animation indices
  const animationKeys = {
    1: 0, // Map key '1' to first animation
    2: 1, // Map key '2' to second animation
    3: 2, // Map key '3' to third animation
    // Add more mappings if you have more animations
  };

  // Listen for key down and up events
  useEffect(() => {
    const handleKeyDown = (event) => {
      keys.current[event.key] = true;

      if (animationKeys[event.key] !== undefined) {
        setAnimationIndex(animationKeys[event.key]);
      }
    };

    const handleKeyUp = (event) => {
      keys.current[event.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setAnimationIndex, animationKeys]);

  // Update the camera position based on key states
  useFrame(() => {
    if (keys.current["ArrowUp"] || keys.current["w"]) {
      camera.position.z -= speed;
      
    }
    if (keys.current["ArrowDown"] || keys.current["s"]) {
      camera.position.z += speed;
    }
    if (keys.current["ArrowLeft"] || keys.current["a"]) {
      camera.position.x -= speed;
    }
    if (keys.current["ArrowRight"] || keys.current["d"]) {
      camera.position.x += speed;
    }
    camera.lookAt(0, 0, 0); // Make the camera look at the origin or adjust as needed
  });

  return null;
};