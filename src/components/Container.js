import { useState } from "react";
import Dashboard from "./Dashboard";
import Overview from "./Overview";
import classes from "./Container.module.css";
const Container = () => {
  const [theme, setTheme] = useState(0);
  const toggleThemeHandler = () => {
    setTheme((prev) => !prev);
  };
  return (
    <div
      className={`${classes.container} ${theme ? classes.light : classes.dark}`}
    >
      <Dashboard theme={theme} toggleThemeHandler={toggleThemeHandler} />
      <Overview theme={theme} />
    </div>
  );
};
export default Container;
