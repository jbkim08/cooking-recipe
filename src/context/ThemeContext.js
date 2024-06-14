const { createContext } = require("react");

//컨텍스트 객체 만들기
export const ThemeContext = createContext();

//프로바이더 컨포넌트
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
