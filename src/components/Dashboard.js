import FollowerCardContainer from "./FollowerCardContainer";
import classes from "./Dashboard.module.css";
const Dashboard = (props) => {
  return (
    <>
      <div
        className={`${classes.sec1} ${
          props.theme ? classes.light : classes.dark
        }`}
      >
        <div>
          <h1>Social Media Dashboard</h1>
          <span>Total Followers: 23,004</span>
        </div>
        <div className={classes.themeSwitcher}>
          <span>Dark Mode</span>
          <div className={classes.switch} onClick={props.toggleThemeHandler}>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
      <FollowerCardContainer theme={props.theme} />
    </>
  );
};
export default Dashboard;
