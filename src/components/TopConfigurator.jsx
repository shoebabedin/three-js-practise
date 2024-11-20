import { useCharacterCustomization } from "../contexts/characterCustomizationContext";

export const TopConfigurator = () => {
  const {
    shirtColor,
    setShirtColor
  } = useCharacterCustomization();

  return (
    <form>
      <div className="flex border p-2 gap-2">
        <label className="text-sm" htmlFor="Hair">Shirt Color:</label>
        <input
          type="color"
          value={shirtColor} // Provide a fallback color if undefined
          onChange={(e)=> setShirtColor(e.target.value)}
        />
      </div>
    </form>
  );
};
