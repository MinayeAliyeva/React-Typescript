
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const ContextExample = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.text,
      }}
    >
      Contextsxs
    </div>
  );
};

export default ContextExample;
