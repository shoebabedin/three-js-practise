import { useCharacterCustomization } from "../contexts/characterCustomizationContext";

export const BottomConfigurator = () => {
  const {
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    lacesColor,
    setLacesColor,
    soleColor,
    setSoleColor
  } = useCharacterCustomization();

  return (
    <form>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Pants Color:</label>
        <input
          type="color"
          value={pantsColor} // Provide a fallback color if undefined
          onChange={(e)=> setPantsColor(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Shoes Color:</label>
        <input
          type="color"
          value={shoesColor} // Provide a fallback color if undefined
          onChange={(e)=> setShoesColor(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Lace Color:</label>
        <input
          type="color"
          value={lacesColor} // Provide a fallback color if undefined
          onChange={(e)=>setLacesColor(e.target.value)}
        />
      </div>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Sole Color:</label>
        <input
          type="color"
          value={soleColor} // Provide a fallback color if undefined
          onChange={(e)=>setSoleColor(e.target.value)}
        />
      </div>
    </form>
  );
};
