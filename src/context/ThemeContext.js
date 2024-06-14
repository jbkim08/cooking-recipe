const { createContext, useReducer } = require("react");

//컨텍스트 객체 만들기
export const ThemeContext = createContext();

//리듀서 함수는 상태,액션을 가지고 액션타입에 따라서 상태객체를 업데이트함
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

//프로바이더 컨포넌트
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: "blue" });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
