import { useCharacterCustomization } from "../contexts/characterCustomizationContext";

export const HeadConfigurator = () => {
  const {
    hairColor,
    setHairColor,
    eyes,
    setEyes,
    mouth,
    setMouth,
    glassesColor,
    setGlassesColor,
    skinColor,
    setSkinColor
  } = useCharacterCustomization();

  return (
    <form>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Hair Color:</label>
        <input
          type="color"
          value={hairColor} // Provide a fallback color if undefined
          onChange={(e)=> setHairColor(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Eyes Color:</label>
        <input
          type="color"
          value={eyes} // Provide a fallback color if undefined
          onChange={(e) => setEyes(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Mouth Color:</label>
        <input
          type="color"
          value={mouth} // Provide a fallback color if undefined
          onChange={(e)=>setMouth(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Glasses Color:</label>
        <input
          type="color"
          value={glassesColor} // Provide a fallback color if undefined
          onChange={(e)=> setGlassesColor(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Skin Color:</label>
        <input
          type="color"
          value={skinColor} // Provide a fallback color if undefined
          onChange={(e)=> setSkinColor(e.target.value)}
        />
      </div>
    </form>
  );
};
