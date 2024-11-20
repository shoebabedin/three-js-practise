// import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterCustomization
} from "../contexts/characterCustomizationContext";
import { BottomConfigurator } from "./BottomConfigurator";
import { HeadConfigurator } from "./HeadConfigurator";
import { TopConfigurator } from "./TopConfigurator";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  const { cameraMode, setCameraMode } = useCharacterCustomization();
  return (
    <>
      <div className="absolute top-0 right-5 border p-1">
        <div className="flex items-center justify-center flex-col gap-2">
          {Object.keys(CameraModes).map((mode) => (
            <button
              className="bg-black text-white w-full py-1 px-2 rounded-sm hover:bg-emerald-700 transition-all duration-300 ease-linear text-sm"
              key={mode}
              onClick={() => setCameraMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-5 border p-1">
        <div className="flex items-center justify-center flex-col">
          {cameraMode === CameraModes.HEAD && <HeadConfigurator />}
          {cameraMode === CameraModes.TOP && <TopConfigurator />}
          {cameraMode === CameraModes.BOTTOM && <BottomConfigurator />}
        </div>
      </div>
      <div className="absolute bottom-0 right-5 border p-1">
        <div className="flex items-center justify-center flex-col gap-2">
          {animations.map((animation, index) => (
            <button
              className="bg-black text-white w-full py-1 px-2 rounded-sm hover:bg-emerald-700 transition-all duration-300 ease-linear text-sm"
              key={animation}
              // variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interface;
