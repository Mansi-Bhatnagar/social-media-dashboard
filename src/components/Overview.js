import ViewsCardContainer from "./ViewsCardContainer";
import classes from "./Overview.module.css";
const Overview = (props) => {
  return (
    <div
      className={`${props.theme ? classes.light : classes.dark} ${
        classes.body
      }`}
    >
      <h2>Overview - Today</h2>
      <ViewsCardContainer theme={props.theme} />
    </div>
  );
};
export default Overview;
