import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../context/ThemeContext";

//테마색을 3가지
const themeColors = ["#58249c", "#249c6b", "#b70233"];
//테마색들을 표시
const ThemeSelector = () => {
  const { changeColor } = useContext(ThemeContext);
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
